import { TBaseComponent } from '../TBaseComponent';
import { Spread } from '../../generics';

export type TSilver = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
