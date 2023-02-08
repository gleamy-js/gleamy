import { TBase } from 'src/types/base-materials/TBase';
import { clipPathRef, clipPathScale, Spread } from 'src/types/generics';

export type THolographic = TBase & {
  edgeThickness: number;
  edgeThicknessMetal: number;
  clipPathRefMetal: clipPathRef;
  clipPathScaleMetal: clipPathScale;
  noFill: boolean;
  spread: Spread;
};
