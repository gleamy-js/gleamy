import { FC, useEffect, useCallback, useRef, useContext } from 'react';
import { setDPI } from '../../utils/setDPI';
import { TStaticGradient, TDynamicGradient } from '../../../types';
import { GleamyContext } from '../../provider';

export const GradientMaterial: FC<TStaticGradient | TDynamicGradient> = ({
  width = 100,
  height = 100,
  noFill = false,
  spread = 0.5,
  acceleration = 0.9,
  material,
  clipPathRef = null,
  className = undefined,
  edgeThickness = 0,
  rendering = true,
  clipPathScale = 1,
  backgroundColor = undefined,
  animator,
  ...props
}) => {
  const gleamyProvider = useContext(GleamyContext);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const clipPaths = useRef<string[]>([]);

  const memoizedCanvas = useCallback(
    (canvasReference: HTMLCanvasElement) => {
      if (canvasReference === null) {
        return {
          canvas: null,
          context: null,
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

      const elementWidth = canvasReference.width;
      const elementHeight = canvasReference.height;

      setDPI(canvas, (gleamyProvider?.devicePixelRatio || 1) * 96);

      // Always set html element if not defined;
      if (elementWidth && elementHeight && canvas) {
        canvas.width = elementWidth;
        canvas.height = elementHeight;
      }

      return { canvas, context, elementWidth, elementHeight };
    },
    [gleamyProvider.devicePixelRatio],
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
  }, [clipPathRef]);

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

  const createEdge = useCallback(
    (context: CanvasRenderingContext2D) => {
      if (!(context && edgeThickness)) {
        return;
      }

      context.lineWidth =
      edgeThickness * ((gleamyProvider?.devicePixelRatio || 1) * 96);

      context.save();
      clipPaths.current.forEach((path) => {
        context.beginPath();
        const p = new Path2D(path);
        context.stroke(p);
      });
      context.restore();
    },
    [edgeThickness, clipPaths, gleamyProvider.devicePixelRatio],
  );

  const render = useCallback(() => {
    if (!canvasRef.current) {
      return;
    }

    const { context, elementWidth, elementHeight } = memoizedCanvas(
      canvasRef.current,
    );

    if (!context) {
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

    const toY = toPosY;
    const toX = toPosX;

    const fromX = -toY - elementWidth * 2;
    const fromY = -toX - elementHeight * 2;

    context.clearRect(0, 0, elementWidth, elementHeight);

    if (backgroundColor) {
      context.fillStyle = backgroundColor.toString();
      context.fillRect(0, 0, elementWidth, elementHeight);
    }

    context.save();

    const createdMaterial = material({
      context,
      pos0X: fromX,
      pos0Y: fromY,
      pos1X: toPosX,
      pos1Y: toPosY,
      animatorX: xY.x,
      animatorY: xY.y,
      spread,
    });

    if (clipPathRef) {
      createClipPath(context);
    }

    if (!noFill) {
      context.save();
      context.beginPath();
      context.fillStyle = createdMaterial;
      context.fillRect(0, 0, elementWidth, elementHeight);
      context.closePath();
      context.restore();
    }

    if (edgeThickness && clipPathRef) {
      context.strokeStyle = material({
        context,
        pos0X: fromY,
        pos0Y: fromX,
        pos1X: toPosX,
        pos1Y: toPosY,
        animatorX: xY.y,
        animatorY: xY.x,
        spread,
      });
      createEdge(context);
    } else if (edgeThickness) {
      const createdMaterialInversed = material({
        context,
        pos0X: fromY,
        pos0Y: fromX,
        pos1X: toPosX,
        pos1Y: toPosY,
        animatorX: xY.y,
        animatorY: xY.x,
        spread,
      });
      context.strokeStyle = createdMaterialInversed;
      context.save();
      context.beginPath();
      context.lineWidth = edgeThickness;

      context.fillStyle = createdMaterialInversed;
      context.rect(
        edgeThickness / 2,
        edgeThickness / 2,
        elementWidth - edgeThickness,
        elementHeight - edgeThickness,
      );
      context.stroke();
      context.closePath();
      context.restore();
    }

    if (rendering) {
      requestAnimationFrame(render);
    }
  }, [
    noFill,
    acceleration,
    material,
    createClipPath,
    memoizedCanvas,
    createEdge,
    clipPathRef,
    spread,
    edgeThickness,
    rendering,
    gleamyProvider,
  ]);

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
