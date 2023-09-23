import { type TBaseComponent } from '../TBaseComponent';
import { type Spread } from '../../generics';

export type TRoseGold = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
