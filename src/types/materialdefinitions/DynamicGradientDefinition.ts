import { Spread } from '../generics';

export interface DynamicGradientDefinition {
  context: CanvasRenderingContext2D;
  pos0X: number;
  pos0Y: number;
  pos1X: number;
  pos1Y: number;
  spread: Spread;
  animatorX: number;
  animatorY: number;
}
