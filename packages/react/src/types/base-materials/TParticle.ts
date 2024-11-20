import {
  type ParticleColor,
  type PercentageRange,
  type Intensity,
  type Color,
  type HueRotationSpeed,
} from '../generics';
import { type ParticleDefinition } from '../materialdefinitions';
import { type TBase } from './TBase';

export type TParticle = TBase & {
  particleColor: ParticleColor | ParticleColor[];
  particleCoverage: PercentageRange;
  particleSize: number;
  depth: number;
  depthAlpha: boolean;
  intensity: Intensity;
  backgroundColor?: Color;
  hueRotationSpeed?: HueRotationSpeed;
  material: (material: ParticleDefinition) => string;
};
