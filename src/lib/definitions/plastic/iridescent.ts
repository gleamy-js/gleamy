import { DynamicGradientDefinition } from '../../../types';
import { spreadColorProps } from '../../utils/spreadColorProps';

export const iridescent = ({
  context,
  pos0X,
  pos0Y,
  pos1X,
  pos1Y,
  animatorX,
  animatorY,
  spread,
}: DynamicGradientDefinition): CanvasGradient => {
  const hueDegrees = Math.floor(
    (Math.atan2(animatorX, animatorY) * 180) / Math.PI,
  );
  const material = context.createLinearGradient(pos0X, pos0Y, pos1X, pos1Y);
  const bgTranslucency = 0.8;
  const shineTranslucency = 1;
  const bgLightness = 50;
  const shineLightness = 80;
  const saturation = 100;
  const colorOffsetDeg = 90;

  const colorStops = [
    [
      0,
      `hsla(${
        hueDegrees - colorOffsetDeg
      }, ${saturation}%, ${bgLightness}%, ${bgTranslucency})`,
    ],
    [
      0.25,
      `hsla(${hueDegrees}, ${saturation}%, ${shineLightness}%, ${shineTranslucency})`,
    ],
    [
      0.5,
      `hsla(${
        hueDegrees + colorOffsetDeg
      }, ${saturation}%, ${bgLightness}%, ${bgTranslucency})`,
    ],
    [
      1,
      `hsla(${
        hueDegrees - colorOffsetDeg
      }, ${saturation}%, ${bgLightness}%, ${bgTranslucency})`,
    ],
  ];

  const renderStops = spreadColorProps(colorStops, spread, 1);

  renderStops.forEach(([stop, color]) => {
    material.addColorStop(parseFloat(stop.toString()), color.toString());
  });

  return material;
};
