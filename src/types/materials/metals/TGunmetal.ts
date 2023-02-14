import { TBaseComponent } from '../TBaseComponent';
import { Spread } from '../../generics';

export type TGunmetal = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
};
