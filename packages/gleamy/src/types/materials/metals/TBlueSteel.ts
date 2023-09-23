import { type TBaseComponent } from '../TBaseComponent';
import { type Spread } from '../../generics';

export type TBlueSteel = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
