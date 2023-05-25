import { forwardRef } from 'react';
import { GradientMaterial } from '.';
import styled from 'styled-components';
import { TStaticGradient } from '../../../types';

const Material = styled(GradientMaterial)`
  display: block;
  position: relative;
  transform: translateZ(0);
`;

export const Metal = forwardRef((props: TStaticGradient, ref) => (
  <Material ref={ref} {...props} />
));
