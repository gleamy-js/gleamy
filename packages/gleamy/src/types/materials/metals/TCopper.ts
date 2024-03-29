import { type TBaseComponent } from '../TBaseComponent';
import { type Spread } from '../../generics';

export type TCopper = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
