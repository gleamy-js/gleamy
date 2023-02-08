import { TBase } from 'src/lib/types/base-materials/TBase';
import {
  Color,
  One,
  ParticleColor,
  PercentageRange,
} from 'src/lib/types/generics';

export type TGlitter = TBase & {
  glitterColor: ParticleColor | ParticleColor[];
  glitterCoverage: PercentageRange;
  glitterSize: number;
  depth: number;
  depthAlpha: boolean;
  intensity: One;
  backgroundColor?: Color;
};
