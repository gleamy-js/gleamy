import { Plastic } from '../../base-materials';
import { lacquer } from '../../../definitions';
import { type TLacquer } from '../../../../types';

export function Lacquer({
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
  translucency = 1,
  foilVisibility = 0.02,
  animator,
  ...props
}: TLacquer): JSX.Element {
  return (
    <Plastic
      width={width}
      height={height}
      noFill={noFill}
      spread={spread}
      acceleration={acceleration}
      clipPathRef={clipPathRef}
      edgeThickness={edgeThickness}
      material={lacquer}
      className={className}
      rendering={rendering}
      backgroundColor={backgroundColor}
      clipPathScale={clipPathScale}
      animator={animator}
      translucency={translucency}
      foilVisibility={foilVisibility}
      {...props}
    />
  );
}
