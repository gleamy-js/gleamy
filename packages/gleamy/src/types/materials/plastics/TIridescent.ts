import { type TBaseComponent } from '../TBaseComponent';
import {
  type FoilVisibility,
  type HueRotationSpeed,
  type Spread,
  type Translucency,
} from '../../generics';

export type TIridescent = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
  translucency?: Translucency;
  hueRotationSpeed?: HueRotationSpeed;
  foilVisibility?: FoilVisibility;
};
