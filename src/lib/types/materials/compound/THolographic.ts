import { TBase } from 'src/lib/types/base-materials/TBase';
import { clipPathRef, clipPathScale, Spread } from 'src/lib/types/generics';

export type THolographic = TBase & {
  edgeThickness: number;
  edgeThicknessMetal: number;
  clipPathRefMetal: clipPathRef;
  clipPathScaleMetal: clipPathScale;
  noFill: boolean;
  spread: Spread;
};
