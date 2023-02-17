import { TBaseComponent } from '../TBaseComponent';
import { Spread } from '../../generics';

export type TIridescent = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
