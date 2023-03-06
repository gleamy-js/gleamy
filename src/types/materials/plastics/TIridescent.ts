import { TBaseComponent } from '../TBaseComponent';
import {
  FoilVisibility,
  HueRotationSpeed,
  Spread,
  Translucency,
} from '../../generics';

export type TIridescent = TBaseComponent & {
  spread?: Spread;
  noFill?: boolean;
  edgeThickness?: number;
  translucency?: Translucency;
  hueRotationSpeed?: HueRotationSpeed;
  foilVisibility?: FoilVisibility;
};
