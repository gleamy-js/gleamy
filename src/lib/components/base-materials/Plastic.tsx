import { forwardRef } from 'react';
import { GradientMaterial } from '.';
import styled from 'styled-components';
import { TDynamicGradient } from '../../../types';

const Material = styled(GradientMaterial)`
  mix-blend-mode: screen;
  position: relative;
  transform: translateZ(0);
`;

export const Plastic = forwardRef((props: TDynamicGradient, ref) => (
  <Material ref={ref} {...props} />
));
