import { Plastic } from '../../base-materials';
import { lacquer } from '../../../definitions';
import { TLacquer } from '../../../../types';

export const Lacquer = ({
  width = '100%',
  height = '100%',
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
}: TLacquer): JSX.Element => (
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
    {...props}
  />
);
