import {
  type Color,
  type FoilVisibility,
  type HueRotationSpeed,
  type Spread,
  type Translucency,
} from '../generics';
import { type DynamicGradientDefinition } from '../materialdefinitions';
import { type TBase } from './TBase';

export type TDynamicGradient = TBase & {
  noFill: boolean;
  edgeThickness: number;
  spread: Spread;
  backgroundColor?: Color;
  translucency?: Translucency;
  hueRotationSpeed?: HueRotationSpeed;
  foilVisibility?: FoilVisibility;
  material: (material: DynamicGradientDefinition) => string;
};
