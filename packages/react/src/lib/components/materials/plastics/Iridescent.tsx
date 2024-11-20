import styled from 'styled-components';
import { Plastic } from '../../base-materials/Plastic';
import { iridescent } from '../../../definitions/plastic/iridescent';
import { type TIridescent } from '../../../../types';

const Component = styled(Plastic)`
  mix-blend-mode: color;
`;

export function Iridescent({
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
  translucency = 1,
  foilVisibility = 0.5,
  hueRotationSpeed = 1,
  ...props
}: TIridescent): JSX.Element {
  return (
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
      translucency={translucency}
      hueRotationSpeed={hueRotationSpeed}
      foilVisibility={foilVisibility}
      {...props}
    />
  );
}
