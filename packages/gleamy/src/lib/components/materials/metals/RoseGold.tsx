import { Metal } from '../../base-materials';
import { rosegold } from '../../../definitions';
import { type TRoseGold } from '../../../../types';

export function RoseGold({
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
}: TRoseGold): JSX.Element {
  return (
    <Metal
      width={width}
      height={height}
      noFill={noFill}
      spread={spread}
      acceleration={acceleration}
      clipPathRef={clipPathRef}
      edgeThickness={edgeThickness}
      material={rosegold}
      className={className}
      backgroundColor={backgroundColor}
      rendering={rendering}
      clipPathScale={clipPathScale}
      animator={animator}
      {...props}
    />
  );
}
