import { Metal } from '../../base-materials';
import { cobalt } from '../../../definitions';
import { TCobalt } from '../../../../types';

export const Cobalt = ({
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
}: TCobalt): JSX.Element => (
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
    {...props}
  />
);
