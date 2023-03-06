import { TBaseComponent } from '../TBaseComponent';
import { FoilVisibility, Spread, Translucency } from '../../generics';

export type TLacquer = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
  translucency?: Translucency;
  foilVisibility?: FoilVisibility;
};
