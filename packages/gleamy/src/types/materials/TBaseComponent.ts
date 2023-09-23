import { type MaterialAnimator } from '../animators';
import {
  type Acceleration,
  type clipPathRef,
  type clipPathScale,
  type Color,
} from '../generics';

export interface TBaseComponent {
  width?: string | number | undefined;
  height?: string | number | undefined;
  acceleration?: Acceleration;
  rendering?: boolean;
  className?: string;
  backgroundColor?: Color;
  clipPathRef?: clipPathRef;
  clipPathScale?: clipPathScale;
  animator?: MaterialAnimator;
  [key: string]: unknown;
}
