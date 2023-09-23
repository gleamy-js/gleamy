import { type TBaseComponent } from '../TBaseComponent';
import { type Spread } from '../../generics';

export type TSilver = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
