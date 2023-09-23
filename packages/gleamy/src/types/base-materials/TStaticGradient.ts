import { type One } from '../generics';
import { type StaticGradientDefinition } from '../materialdefinitions';
import { type TBase } from './TBase';

export type TStaticGradient = TBase & {
  noFill: boolean;
  edgeThickness: number;
  spread: One;
  material: (material: StaticGradientDefinition) => string;
};
