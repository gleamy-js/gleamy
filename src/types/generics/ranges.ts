import { ComputeRange } from '../utils/ComputeRange';

type MAXIMUM_ALLOWED_BOUNDARY = 100;

export type One = 0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1;
export type Two = One | 1.1 | 1.2 | 1.3 | 1.4 | 1.5 | 1.6 | 1.7 | 1.8 | 1.9 | 2;

export type PercentageRange =
  | One
  | Two
  | ComputeRange<MAXIMUM_ALLOWED_BOUNDARY>[number]; // 0 - 100

export type Spread = One | 1;

export type Translucency = number;

export type FoilVisibility = number;

export type HueRotationSpeed = number;

export type Acceleration = One | Two;

export type Intensity = One;
