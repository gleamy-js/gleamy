import { Acceleration, clipPathRef, clipPathScale, Color } from '../generics';

export type TBaseComponent = {
  width?: string | number | undefined;
  height?: string | number | undefined;
  acceleration?: Acceleration;
  rendering?: boolean;
  className?: string;
  backgroundColor?: Color;
  clipPathRef?: clipPathRef;
  clipPathScale?: clipPathScale;
  [key: string]: unknown;
};
