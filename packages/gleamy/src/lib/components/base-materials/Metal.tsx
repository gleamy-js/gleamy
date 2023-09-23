import { forwardRef } from 'react';
import styled from 'styled-components';
import { GradientMaterial } from './GradientMaterial';
import { type TStaticGradient } from '../../../types';

const Material = styled(GradientMaterial)`
  display: block;
  position: relative;
  transform: translateZ(0);
`;

const Metal = forwardRef(function Metal(props: TStaticGradient, ref) {
  return <Material ref={ref} {...props} />;
});

Metal.displayName = 'Metal';

export { Metal };
