import { TBaseComponent } from '../TBaseComponent';
import { Spread } from '../../generics';

export type TLacquer = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
