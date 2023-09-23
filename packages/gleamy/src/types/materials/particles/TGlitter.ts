import { type TBaseComponent } from '../TBaseComponent';
import {
  type HueRotationSpeed,
  type Intensity,
  type ParticleColor,
  type PercentageRange,
} from '../../generics';

export type TGlitter = TBaseComponent & {
  glitterColor?: ParticleColor | ParticleColor[];
  glitterCoverage?: PercentageRange;
  glitterSize?: number;
  depth?: number;
  depthAlpha?: boolean;
  intensity?: Intensity;
  hueRotationSpeed?: HueRotationSpeed;
};
