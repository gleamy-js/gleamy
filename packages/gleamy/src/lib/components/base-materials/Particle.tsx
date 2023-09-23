import { forwardRef } from 'react';
import styled from 'styled-components';
import { ParticleMaterial } from './ParticleMaterial';
import { type TParticle } from '../../../types';

const Material = styled(ParticleMaterial)`
  mix-blend-mode: normal;
  position: relative;
  transform: translateZ(0);
`;

const Particle = forwardRef(function Particle(props: TParticle, ref) {
  return <Material ref={ref} {...props} />;
});

Particle.displayName = 'Particle';

export { Particle };
