import { TBaseComponent } from '../TBaseComponent';
import {
  HueRotationSpeed,
  Intensity,
  ParticleColor,
  PercentageRange,
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
