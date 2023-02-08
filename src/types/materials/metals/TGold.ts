import { TBase } from 'src/types/base-materials/TBase';
import { Spread } from 'src/types/generics';

export type TGold = TBase & {
  spread: Spread;
  noFill: boolean;
  edgeThickness: number;
};
