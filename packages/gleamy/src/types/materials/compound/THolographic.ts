import { type TBaseComponent } from '../TBaseComponent';
import {
  type clipPathRef,
  type clipPathScale,
  type HueRotationSpeed,
  type Spread,
  type FoilVisibility,
} from '../../generics';

export type THolographic = TBaseComponent & {
  edgeThickness?: number;
  edgeThicknessMetal?: number;
  clipPathRefMetal?: clipPathRef;
  clipPathScaleMetal?: clipPathScale;
  noFill?: boolean;
  spread?: Spread;
  hueRotationSpeed?: HueRotationSpeed;
  foilVisibility?: FoilVisibility;
};
