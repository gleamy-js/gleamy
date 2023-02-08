import { ComputeRange } from '../utils/ComputeRange';

type MAXIMUM_ALLOWED_BOUNDARY = 256;

type AlphaChanel = `0.${ComputeRange<999>[number]}` | '1.0';
type AssertAlpha<Alpha extends number> = `${Alpha}` extends AlphaChanel
  ? Alpha
  : never;
type Octal = ComputeRange<MAXIMUM_ALLOWED_BOUNDARY>[number]; // 0 - 255
type HEX = `#${string}`;

export type RGBA<Alpha extends number = 1.0> = [
  Octal,
  Octal,
  Octal,
  AssertAlpha<Alpha>?,
];

export type Color = RGBA | string | HEX;

export type ParticleColor = 'holographic' | Color;

export type ColorStops = (string | number)[][];
