import { One } from '../generics';
import { StaticGradientDefinition } from '../materialdefinitions';
import { TBase } from './TBase';

export type TStaticGradient = TBase & {
  noFill: boolean;
  edgeThickness: number;
  spread: One;
  material: (material: StaticGradientDefinition) => string;
};
