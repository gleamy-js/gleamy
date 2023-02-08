import { DynamicGradientDefinition } from '../../types';
import { spreadColorProps } from '../../utils/spreadColorProps';

export const holographic = ({
  context,
  pos0X,
  pos0Y,
  pos1X,
  pos1Y,
  animatorX,
  animatorY,
  spread,
}: DynamicGradientDefinition): CanvasGradient => {
  const nonHologrpahicAlpha = 0.05;
  const colorSpreadOffset = 80;
  const material = context.createLinearGradient(pos0X, pos0Y, pos1X, pos1Y);
  const angleDeg = Math.floor(
    (Math.atan2(animatorY - pos0Y, animatorX - pos0X) * 180) / Math.PI,
  );
  const saturation = 100;
  const flatSaturationReduction = 100;

  const background = Math.floor(
    (angleDeg -
      (angleDeg / flatSaturationReduction > 0
        ? angleDeg / flatSaturationReduction
        : -angleDeg / flatSaturationReduction) +
      1 * 10) **
      0.9,
  );
  const bg = (background > 0 ? background : -background) || 0;
  const bgSaturation =
    saturation - flatSaturationReduction > 0
      ? saturation - flatSaturationReduction
      : -(saturation - flatSaturationReduction);
  const lightness = saturation / flatSaturationReduction - bgSaturation;
  const bgLightness = (lightness > 0 ? lightness : -lightness) + 50;

  const colorStops = [
    [
      0,
      `hsla(${bg}, ${bgSaturation}%, ${bgLightness}%, ${nonHologrpahicAlpha})`,
    ],
    [
      0.4,
      `hsla(${angleDeg - colorSpreadOffset}, ${saturation}%, 50%, ${
        saturation / 10
      })`,
    ],
    [0.5, `hsla(${angleDeg}, ${saturation}%, 50%, ${saturation / 10})`],
    [
      0.6,
      `hsla(${angleDeg + colorSpreadOffset}, ${saturation}%, 50%, ${
        saturation / 10
      })`,
    ],
    [
      1,
      `hsla(${bg}, ${bgSaturation}%, ${bgLightness}%, ${nonHologrpahicAlpha})`,
    ],
  ];

  const renderStops = spread
    ? spreadColorProps(colorStops, spread, 1)
    : colorStops;

  renderStops.forEach(([stop, color]) => {
    material.addColorStop(parseFloat(stop.toString()), color.toString());
  });

  return material;
};
