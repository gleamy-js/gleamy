import {
  ParticleColor,
  PercentageRange,
  Intensity,
  Color,
  HueRotationSpeed,
} from '../generics';
import { ParticleDefinition } from '../materialdefinitions';
import { TBase } from './TBase';

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
