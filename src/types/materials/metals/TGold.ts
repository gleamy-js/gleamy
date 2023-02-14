import { TBaseComponent } from '../TBaseComponent';
import { Spread } from '../../generics';

export type TGold = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
