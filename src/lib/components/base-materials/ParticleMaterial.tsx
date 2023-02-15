import { FC, useEffect, useCallback, useContext, useRef } from 'react';
import { setDPI } from '../../utils/setDPI';
import { TParticle } from '../../../types';
import { GleamyContext } from '../../provider';

type CreateParticles = {
  depth: number;
  particleAmount: number;
  particleSize: number;
  elementWidth: number;
  elementHeight: number;
};

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
  particleColor = 'silver',
  depthAlpha = true,
  rendering = true,
  backgroundColor = undefined,
  clipPathScale = 1,
  intensity = 0.5,
  animator,
  ...props
}) => {
  const gleamyProvider = useContext(GleamyContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const clipPaths = useRef<string[]>([]);
  const particles = useRef<ParticleLayer[][]>([]);

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
      const elementWidth = canvasReference.width;
      const elementHeight = canvasReference.height;

      const maxParticleAmount = (elementHeight * elementWidth) / particleSize;
      const particleAmount =
        (maxParticleAmount / 100) *
        (particleCoverage > 100 ? 100 : particleCoverage);

      setDPI(canvas, (gleamyProvider?.devicePixelRatio || 1) * 96);

      // Always set html element if not defined;
      if (elementWidth && elementHeight && canvas) {
        canvas.width = elementWidth;
        canvas.height = elementHeight;
      }

      if (!particles.current.length) {
        const newParticles = createParticles({
          depth,
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
      context.beginPath();
      context.scale(clipPathScale, clipPathScale);
      clipPaths.current.forEach((path) => {
        const p = new Path2D(path);
        context.clip(p);
      });
      context.closePath();
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

    if (context === null || gleamyProvider.defaultAnimator) {
      return;
    }

    let xY;
    const { animators } = gleamyProvider;
    const defaultAnimator = animators
      ? animators[gleamyProvider.defaultAnimator || 'mouseMove']
      : { x: 0, y: 0 };

    if (animator && typeof animator === 'string') {
      xY = animators ? animators[animator] : defaultAnimator;
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

    particles.current.forEach((layer, index) => {
      // console.log('rendering particle');
      const selectedParticleColor = Array.isArray(particleColor)
        ? particleColor[index % particleColor.length]
        : particleColor;

      const rotationDegrees = Math.floor(
        (360 / particles.current.length) * index,
      );
      const depthPercentage = (1 / depth) * (index + 1);

      context.fillStyle = material({
        context,
        pos1X: (index % 2 === 0 ? toX + 50 : fromX + 50) + rotationDegrees,
        pos1Y: (index % 2 === 0 ? toY + 50 : fromY + 50) + rotationDegrees,
        particleColor: selectedParticleColor?.toString() ?? 'white',
        depthPercentage,
        depthAlpha,
        intensity,
      });

      context.save();
      const addedMarginWidth = elementWidth / 2;
      const addedMarginHeight = elementHeight / 2;
      context.translate(addedMarginWidth, addedMarginHeight);
      context.translate(-addedMarginWidth, -addedMarginHeight);

      layer.forEach((particle: ParticleLayer) => {
        context.beginPath();
        context.arc(...particle);
        context.fill();
        context.closePath();
      });
      context.restore();
      context.setTransform(1, 0, 0, 1, 0, 0);
    });

    context.restore();

    if (rendering) {
      requestAnimationFrame(render);
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
    gleamyProvider,
  ]);

  // init
  useEffect(() => {
    requestAnimationFrame(render);
  }, [render]);

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
