import { TBaseComponent } from '../TBaseComponent';
import { Spread } from '../../generics';

export type TCobalt = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
