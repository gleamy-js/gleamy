import { forwardRef } from 'react';
import styled from 'styled-components';
import { ParticleMaterial } from './ParticleMaterial';
import { type TGlitter } from '../../../types';

const Material = styled(ParticleMaterial)`
  display: block;
  position: relative;
  transform: translateZ(0);
`;

const Particle = forwardRef<typeof ParticleMaterial, TGlitter>((props, ref) => {
  const { width, height, acceleration, rendering, material, ...rest } = props as TGlitter;
  return <Material ref={ref} width={width} height={height} acceleration={acceleration ?? 1} rendering={rendering ?? true} material={material} {...rest} />
});

Particle.displayName = 'Particle';

export { Particle };
