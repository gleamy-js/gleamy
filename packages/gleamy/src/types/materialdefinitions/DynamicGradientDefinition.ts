import {
  type HueRotationSpeed,
  type Spread,
  type Translucency,
  type FoilVisibility,
} from '../generics';

export interface DynamicGradientDefinition {
  context: CanvasRenderingContext2D;
  pos0X: number;
  pos0Y: number;
  pos1X: number;
  pos1Y: number;
  spread: Spread;
  animatorX: number;
  animatorY: number;
  translucency?: Translucency;
  hueRotationSpeed?: HueRotationSpeed;
  foilVisibility?: FoilVisibility;
}
