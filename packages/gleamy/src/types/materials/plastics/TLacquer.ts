import { type TBaseComponent } from '../TBaseComponent';
import {
  type FoilVisibility,
  type Spread,
  type Translucency,
} from '../../generics';

export type TLacquer = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
  translucency?: Translucency;
  foilVisibility?: FoilVisibility;
};
