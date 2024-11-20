import { Metal } from '../../base-materials/Metal';
import { cobalt } from '../../../definitions/metal/cobalt';
import { type TCobalt } from '../../../../types';

export function Cobalt({
  width = 100,
  height = 100,
  noFill = false,
  acceleration = 1,
  clipPathRef = null,
  edgeThickness = 1,
  spread = 0.5,
  className,
  rendering,
  backgroundColor,
  clipPathScale,
  animator,
  ...props
}: TCobalt): JSX.Element {
  return (
    <Metal
      width={width}
      height={height}
      noFill={noFill}
      spread={spread}
      acceleration={acceleration}
      clipPathRef={clipPathRef}
      edgeThickness={edgeThickness}
      material={cobalt}
      className={className}
      backgroundColor={backgroundColor}
      clipPathScale={clipPathScale}
      rendering={rendering}
      animator={animator}
      {...props}
    />
  );
}
