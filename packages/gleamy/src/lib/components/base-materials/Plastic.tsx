import { forwardRef } from 'react';
import styled from 'styled-components';
import { GradientMaterial } from './GradientMaterial';
import { type TDynamicGradient } from '../../../types';

const Material = styled(GradientMaterial)`
  mix-blend-mode: screen;
  display: block;
  position: relative;
  transform: translateZ(0);
`;

const Plastic = forwardRef<typeof GradientMaterial, TDynamicGradient>((props, ref) => {
  const { width, height, acceleration, rendering, noFill, edgeThickness, spread, material, ...rest } = props as TDynamicGradient;
  return <Material ref={ref}  width={width} height={height} acceleration={acceleration} rendering={rendering} noFill={noFill} edgeThickness={edgeThickness} spread={spread} material={material} {...rest}/>;
});

Plastic.displayName = 'Plastic';

export { Plastic };
