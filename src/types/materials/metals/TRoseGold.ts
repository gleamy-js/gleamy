import { TBaseComponent } from '../TBaseComponent';
import { Spread } from '../../generics';

export type TRoseGold = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
