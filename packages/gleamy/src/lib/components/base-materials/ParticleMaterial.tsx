import { type FC, useEffect, useCallback, useContext, useRef } from 'react';
import { setDPI } from '../../utils/setDPI';
import { type TParticle } from '../../../types';
import { GleamyContext } from '../../provider';

interface CreateParticles {
  depth: number;
  particleAmount: number;
  particleSize: number;
  elementWidth: number;
  elementHeight: number;
}

type ParticleLayer = [number, number, number, number, number, boolean];

const createParticles = ({
  depth,
  particleAmount,
  particleSize,
  elementWidth,
  elementHeight,
}: CreateParticles): ParticleLayer[][] => {
  const particleAmountPerLayer = Math.floor(particleAmount / depth);
  const particleLayers = Array(depth)
    .fill(0)
    .map(() => {
      const particleLayer = [] as ParticleLayer[];

      for (let i = 0; i <= particleAmountPerLayer; i += 1) {
        const dotX = Math.floor(Math.random() * elementWidth);
        const dotY = Math.floor(Math.random() * elementHeight);
        const particleInformation = [
          dotX,
          dotY,
          particleSize,
          0,
          Math.PI * 2,
          false,
        ] as ParticleLayer;
        particleLayer.push(particleInformation);
      }

      return particleLayer;
    });

  return particleLayers;
};

export const ParticleMaterial: FC<TParticle> = ({
  clipPathRef = null,
  width = 100,
  height = 100,
  acceleration = 1,
  material,
  className = undefined,
  particleCoverage = 5,
  particleSize = 1,
  depth = 25,
  particleColor = '#ff9300',
  depthAlpha = false,
  rendering = true,
  backgroundColor = 'black',
  clipPathScale = 1,
  intensity = 0.5,
  hueRotationSpeed = 1,
  animator,
  ...props
}) => {
  const gleamyProvider = useContext(GleamyContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const clipPaths = useRef<string[]>([]);
  const particles = useRef<ParticleLayer[][]>([]);
  const particleDepthLayers =
    Array.isArray(particleColor) && particleColor.length > depth
      ? particleColor.length
      : depth;

  const memoizedCanvas = useCallback(
    (canvasReference: HTMLCanvasElement) => {
      if (canvasReference === null) {
        return {
          canvas: null,
          context: null,
          position: { top: 0, left: 0 },
          elementWidth: 0,
          elementHeight: 0,
        };
      }

      const canvas = canvasReference;
      const context = canvas.getContext('2d', {
        alpha: true,
        desynchronized: true,
        willReadFrequently: true,
      });
      const position = canvasReference.getBoundingClientRect();
      setDPI(canvas, (gleamyProvider?.devicePixelRatio || 1) * 96);

      const elementWidth = canvasReference.width;
      const elementHeight = canvasReference.height;

      const maxParticleAmount = (elementHeight * elementWidth) / particleSize;
      const particleAmount =
        (maxParticleAmount / 100) *
        (particleCoverage > 100 ? 100 : particleCoverage);

      if (particles.current.length === 0) {
        const newParticles = createParticles({
          depth: particleDepthLayers,
          particleAmount,
          particleSize,
          elementWidth,
          elementHeight,
        });
        particles.current = [...newParticles];
      }

      return { canvas, context, position, elementWidth, elementHeight };
    },
    [particleCoverage, particleSize, depth, gleamyProvider.devicePixelRatio],
  );

  useEffect(() => {
    if (clipPathRef?.current) {
      const paths = Object.values(clipPathRef.current.querySelectorAll('path'));
      clipPaths.current = []; // reset
      paths.forEach((path: SVGPathElement) => {
        const d = path.getAttribute('d') || undefined;
        if (d) {
          clipPaths.current.push(d);
        }
      });
    }
  }, [clipPathRef, clipPaths]);

  const createClipPath = useCallback(
    (context: CanvasRenderingContext2D) => {
      context.save();
      clipPaths.current.forEach((path) => {
        context.beginPath();
        context.scale(clipPathScale, clipPathScale);
        const p = new Path2D(path);
        context.closePath();
        context.clip(p);
      });
    },
    [clipPaths, clipPathScale],
  );

  const render = useCallback(() => {
    if (!canvasRef.current) {
      return;
    }

    const { context, position, elementWidth, elementHeight } = memoizedCanvas(
      canvasRef.current,
    );

    if (context === null || !gleamyProvider.defaultAnimator) {
      return;
    }

    let xY;
    const { animators } = gleamyProvider;
    const defaultAnimator = animators
      ? animators[gleamyProvider.defaultAnimator || 'mouseMove']
      : { x: 0, y: 0 };

    if (animator && typeof animator === 'string') {
      xY = animators ? animators[`${animator}`] : defaultAnimator;
    } else if (animator && typeof animator === 'function') {
      xY = animator();
    } else {
      xY = defaultAnimator;
    }

    const toPosX = xY.x ** acceleration || 1;
    const toPosY = xY.y ** acceleration || 1;

    const toY = Math.floor(toPosY - position.top + elementHeight);
    const toX = Math.floor(toPosX - position.left + elementWidth);
    const fromX = -toY - elementHeight * 2;
    const fromY = -toX - elementWidth * 2;

    context.clearRect(0, 0, elementWidth, elementHeight);

    if (backgroundColor) {
      context.fillStyle = backgroundColor.toString();
      context.fillRect(0, 0, elementWidth, elementHeight);
    }

    context.save();

    if (clipPathRef && context) {
      createClipPath(context);
    }

    const particleArray = particles.current;

    for (let i = 0; i < particleArray.length; i++) {
      // eslint-disable-next-line security/detect-object-injection
      const layer = particleArray[i];

      const selectedParticleColor = Array.isArray(particleColor)
        ? particleColor[i % particleColor.length]
        : particleColor;

      const rotationDegrees = Math.floor((360 / particleArray.length) * i);
      const depthPercentage = (1 / depth) * (i + 1);

      material({
        context,
        pos1X: (i % 2 === 0 ? toX + 50 : fromX + 50) + rotationDegrees,
        pos1Y: (i % 2 === 0 ? toY + 50 : fromY + 50) + rotationDegrees,
        particleColor: selectedParticleColor?.toString() ?? 'white',
        depthPercentage,
        depthAlpha,
        intensity,
        hueRotationSpeed,
      });

      context.save();
      context.setTransform(1, 0, 0, 1, 0, 0);
      const addedMarginWidth = elementWidth / 2;
      const addedMarginHeight = elementHeight / 2;
      context.translate(addedMarginWidth, addedMarginHeight);
      context.translate(-addedMarginWidth, -addedMarginHeight);

      const beginPath = context.beginPath.bind(context);
      const arc = context.arc.bind(context);
      const fill = context.fill.bind(context);

      for (let j = 0; j < layer.length; j++) {
        // eslint-disable-next-line security/detect-object-injection
        const particle = layer[j];
        beginPath();
        arc(...particle);
        fill();
      }

      context.restore();
    }
  }, [
    intensity,
    acceleration,
    material,
    depthAlpha,
    createClipPath,
    memoizedCanvas,
    clipPathRef,
    particleColor,
    rendering,
    depth,
    hueRotationSpeed,
    gleamyProvider,
  ]);

  useEffect(() => {
    const fps = gleamyProvider?.fps || 60;

    let animationFrameId = 0;
    const interval = 1000 / fps;
    let now;
    let then = Date.now();
    let delta;

    function draw() {
      now = Date.now();
      delta = now - then;

      if (delta > interval) {
        then = now - (delta % interval);
        rendering && render();
      }
      animationFrameId = window.requestAnimationFrame(draw);
    }

    draw();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [props]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      width={width}
      height={height}
      {...props}
    />
  );
};
