import { Plastic } from '../../base-materials';
import { iridescent } from '../../../definitions';
import styled from 'styled-components';
import { TIridescent } from '../../../../types';

const Component = styled(Plastic)`
  mix-blend-mode: color;
`;

export const Iridescent = ({
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
}: TIridescent): JSX.Element => (
  <Component
    width={width}
    height={height}
    noFill={noFill}
    spread={spread}
    acceleration={acceleration}
    clipPathRef={clipPathRef}
    edgeThickness={edgeThickness}
    material={iridescent}
    className={className}
    rendering={rendering}
    backgroundColor={backgroundColor}
    clipPathScale={clipPathScale}
    animator={animator}
    {...props}
  />
);
