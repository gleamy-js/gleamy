import { forwardRef } from 'react';
import { GradientMaterial } from '.';
import styled from 'styled-components';
import { TStaticGradient } from '../../../types';

const Material = styled(GradientMaterial)`
  display: block;
`;

export const Metal = forwardRef((props: TStaticGradient, ref) => (
  <Material ref={ref} {...props} />
));
