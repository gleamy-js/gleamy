import { Metal } from '../../base-materials/Metal';
import { blueSteel } from '../../../definitions/metal/blueSteel';
import { type TBlueSteel } from '../../../../types';

export function BlueSteel({
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
}: TBlueSteel): JSX.Element {
  return (
    <Metal
      width={width}
      height={height}
      noFill={noFill}
      spread={spread}
      acceleration={acceleration}
      clipPathRef={clipPathRef}
      edgeThickness={edgeThickness}
      material={blueSteel}
      className={className}
      backgroundColor={backgroundColor}
      rendering={rendering}
      clipPathScale={clipPathScale}
      animator={animator}
      {...props}
    />
  );
}
