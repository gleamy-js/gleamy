import { Color, Spread } from '../generics';
import { DynamicGradientDefinition } from '../materialdefinitions';
import { TBase } from './TBase';

export type TDynamicGradient = TBase & {
  noFill: boolean;
  edgeThickness: number;
  spread: Spread;
  backgroundColor?: Color;
  material: (material: DynamicGradientDefinition) => string;
};
