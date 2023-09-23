import { forwardRef } from 'react';
import styled from 'styled-components';
import { GradientMaterial } from './GradientMaterial';
import { type TDynamicGradient } from '../../../types';

const Material = styled(GradientMaterial)`
  mix-blend-mode: screen;
  position: relative;
  transform: translateZ(0);
`;

export const Plastic = forwardRef(function Plastic(
  props: TDynamicGradient,
  ref,
) {
  return <Material ref={ref} {...props} />;
});

Plastic.displayName = 'Plastic';
