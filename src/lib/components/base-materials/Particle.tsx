import { forwardRef } from 'react';
import { ParticleMaterial } from '.';
import styled from 'styled-components';
import { TParticle } from 'src/lib/types';

const Material = styled(ParticleMaterial)`
  mix-blend-mode: normal;
  position: relative;
`;

export const Particle = forwardRef((props: TParticle, ref) => (
  <Material ref={ref} {...props} />
));
