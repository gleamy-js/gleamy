import { Metal } from '../../base-materials';
import { copper } from '../../../definitions';
import { TCopper } from '../../../../types';

export const Copper = ({
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
  ...props
}: TCopper): JSX.Element => (
  <Metal
    width={width}
    height={height}
    noFill={noFill}
    spread={spread}
    acceleration={acceleration}
    clipPathRef={clipPathRef}
    edgeThickness={edgeThickness}
    material={copper}
    className={className}
    backgroundColor={backgroundColor}
    rendering={rendering}
    clipPathScale={clipPathScale}
    {...props}
  />
);
