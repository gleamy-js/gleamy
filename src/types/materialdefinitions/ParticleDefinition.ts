import {
  ParticleColor,
  Intensity,
  PercentageRange,
  HueRotationSpeed,
} from '../generics';

export interface ParticleDefinition {
  context: CanvasRenderingContext2D;
  pos1X: number;
  pos1Y: number;
  particleColor: ParticleColor;
  depthPercentage: number | PercentageRange;
  depthAlpha: boolean;
  intensity: Intensity;
  hueRotationSpeed?: HueRotationSpeed;
}
