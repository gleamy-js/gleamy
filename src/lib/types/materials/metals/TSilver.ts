import { TBase } from 'src/lib/types/base-materials/TBase';
import { Spread } from 'src/lib/types/generics';

export type TSilver = TBase & {
  spread: Spread;
  noFill: boolean;
  edgeThickness: number;
};
