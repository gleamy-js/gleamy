import { TBaseComponent } from '../TBaseComponent';
import { Spread } from '../../generics';

export type TSteel = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
