import { Metal } from '../../base-materials/Metal';
import { gunmetal } from '../../../definitions/metal/gunmetal';
import { type TGunmetal } from '../../../../types';

export function Gunmetal({
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
}: TGunmetal): JSX.Element {
  return (
    <Metal
      width={width}
      height={height}
      noFill={noFill}
      spread={spread}
      acceleration={acceleration}
      clipPathRef={clipPathRef}
      edgeThickness={edgeThickness}
      material={gunmetal}
      className={className}
      backgroundColor={backgroundColor}
      rendering={rendering}
      clipPathScale={clipPathScale}
      animator={animator}
      {...props}
    />
  );
}
