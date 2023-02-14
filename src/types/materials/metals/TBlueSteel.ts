import { TBaseComponent } from '../TBaseComponent';
import { Spread } from '../../generics';

export type TBlueSteel = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
