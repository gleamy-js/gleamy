import {
  Color,
  FoilVisibility,
  HueRotationSpeed,
  Spread,
  Translucency,
} from '../generics';
import { DynamicGradientDefinition } from '../materialdefinitions';
import { TBase } from './TBase';

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
