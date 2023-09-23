import { Metal } from '../../base-materials';
import { steel } from '../../../definitions';
import { type TSteel } from '../../../../types';

export function Steel({
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
}: TSteel): JSX.Element {
  return (
    <Metal
      width={width}
      height={height}
      noFill={noFill}
      spread={spread}
      acceleration={acceleration}
      clipPathRef={clipPathRef}
      edgeThickness={edgeThickness}
      material={steel}
      className={className}
      backgroundColor={backgroundColor}
      rendering={rendering}
      clipPathScale={clipPathScale}
      animator={animator}
      {...props}
    />
  );
}
