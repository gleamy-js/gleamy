import { type TBaseComponent } from '../TBaseComponent';
import { type Spread } from '../../generics';

export type TSteel = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
