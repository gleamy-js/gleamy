import { TBaseComponent } from '../TBaseComponent';
import { Spread } from '../../generics';

export type TCopper = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
