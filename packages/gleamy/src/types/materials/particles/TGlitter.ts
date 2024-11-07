import { type TBaseComponent } from '../TBaseComponent';
import {
  type HueRotationSpeed,
  type Intensity,
  type ParticleColor,
  type PercentageRange,
  type Acceleration,
} from '../../generics';

export type TGlitter = TBaseComponent & {
  glitterColor?: ParticleColor;
  glitterCoverage?: PercentageRange;
  glitterSize?: number;
  depth?: number;
  depthAlpha?: boolean;
  intensity?: Intensity;
  hueRotationSpeed?: HueRotationSpeed;
  width?: string | number;
  height?: string | number;
  acceleration?: Acceleration;
  rendering?: boolean;
};
