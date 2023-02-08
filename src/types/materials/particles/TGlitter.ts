import { TBase } from 'src/types/base-materials/TBase';
import { Color, One, ParticleColor, PercentageRange } from 'src/types/generics';

export type TGlitter = TBase & {
  glitterColor: ParticleColor | ParticleColor[];
  glitterCoverage: PercentageRange;
  glitterSize: number;
  depth: number;
  depthAlpha: boolean;
  intensity: One;
  backgroundColor?: Color;
};
