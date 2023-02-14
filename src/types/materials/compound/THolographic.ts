import { TBaseComponent } from '../TBaseComponent';
import { clipPathRef, clipPathScale, Spread } from '../../generics';

export type THolographic = TBaseComponent & {
  edgeThickness?: number;
  edgeThicknessMetal?: number;
  clipPathRefMetal?: clipPathRef;
  clipPathScaleMetal?: clipPathScale;
  noFill?: boolean;
  spread?: Spread;
};
