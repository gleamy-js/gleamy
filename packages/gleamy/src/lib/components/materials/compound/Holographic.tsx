import styled from 'styled-components';
import { Metal, Plastic, CompoundContainer } from '../../base-materials';
import { gunmetal, laser } from '../../../definitions';
import { type THolographic } from '../../../../types';

const StyledFoil = styled(Plastic)`
  mix-blend-mode: color-dodge;
  position: absolute;
  z-index: 2;
`;

const StyledMetal = styled(Metal)`
  position: absolute;
  z-index: 1;
`;

export function Holographic({
  width = 100,
  height = 100,
  noFill = false,
  acceleration = 1,
  edgeThickness = 1,
  edgeThicknessMetal = 1,
  spread = 0.5,
  clipPathRef = null,
  clipPathRefMetal = null,
  className,
  rendering,
  backgroundColor,
  clipPathScale = 1,
  clipPathScaleMetal = 1,
  hueRotationSpeed = 1.2,
  foilVisibility = 0.02,
  animator,
  ...props
}: THolographic): JSX.Element {
  return (
    <CompoundContainer className={className} {...props}>
      <StyledFoil
        spread={spread}
        width={width}
        height={height}
        noFill={noFill}
        acceleration={acceleration}
        clipPathRef={clipPathRef}
        edgeThickness={edgeThickness}
        material={laser}
        rendering={rendering}
        clipPathScale={clipPathScale}
        animator={animator}
        foilVisibility={foilVisibility}
        hueRotationSpeed={hueRotationSpeed}
      />
      <StyledMetal
        spread={spread}
        width={width}
        height={height}
        acceleration={acceleration}
        clipPathRef={clipPathRefMetal}
        edgeThickness={edgeThicknessMetal}
        material={gunmetal}
        rendering={rendering}
        backgroundColor={backgroundColor}
        clipPathScale={clipPathScaleMetal}
        animator={animator}
      />
    </CompoundContainer>
  );
}
