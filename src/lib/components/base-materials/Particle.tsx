import { forwardRef } from 'react';
import { ParticleMaterial } from './ParticleMaterial';
import styled from 'styled-components';
import { TParticle } from '../../../types';

const Material = styled(ParticleMaterial)`
  mix-blend-mode: normal;
  position: relative;
  transform: translateZ(0);
`;

export const Particle = forwardRef((props: TParticle, ref) => (
  <Material ref={ref} {...props} />
));
