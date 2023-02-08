import { ColorStops } from '../../types';
import { DynamicGradientDefinition } from '../../types/materialdefinitions/DynamicGradientDefinition';
import { spreadColorProps } from '../../utils/spreadColorProps';

export const laser = ({
  context,
  pos0X,
  pos0Y,
  pos1X,
  pos1Y,
  animatorX,
  animatorY,
  spread,
}: DynamicGradientDefinition): CanvasGradient => {
  const nonHologrpahicAlpha = 0.01;
  const colorSpreadOffset = 80;
  const material = context.createLinearGradient(pos0X, pos0Y, pos1X, pos1Y);
  const angleDeg =
    Math.ceil(
      ((Math.atan2(animatorY - pos0Y, animatorX - pos1X) * 720) / Math.PI) * 1,
    ) || 1;
  const saturation = 100;
  const flatSaturationReduction = 100;

  let renderStops = [] as ColorStops;

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
      0.57,
      `hsla(${bg}, ${bgSaturation}%, ${bgLightness}%, ${nonHologrpahicAlpha})`,
    ],
    [
      0.59,
      `hsla(${angleDeg - colorSpreadOffset}, ${saturation}%, 50%, ${
        saturation / 10
      })`,
    ],
    [0.6, `hsla(${angleDeg}, ${saturation}%, 50%, ${saturation / 10})`],
    [
      0.61,
      `hsla(${angleDeg + colorSpreadOffset}, ${saturation}%, 50%, ${
        saturation / 10
      })`,
    ],
    [
      0.62,
      `hsla(${bg}, ${bgSaturation}%, ${bgLightness}%, ${nonHologrpahicAlpha})`,
    ],
    [
      0.75,
      `hsla(${bg}, ${bgSaturation}%, ${bgLightness}%, ${nonHologrpahicAlpha})`,
    ],
    [
      0.77,
      `hsla(${angleDeg - colorSpreadOffset}, ${saturation}%, 50%, ${
        saturation / 10
      })`,
    ],
    [0.8, `hsla(${angleDeg}, ${saturation}%, 50%, ${saturation / 10})`],
    [
      0.83,
      `hsla(${angleDeg + colorSpreadOffset}, ${saturation}%, 50%, ${
        saturation / 10
      })`,
    ],
    [
      0.9,
      `hsla(${bg}, ${bgSaturation}%, ${bgLightness}%, ${nonHologrpahicAlpha})`,
    ],
    [
      1.0,
      `hsla(${bg}, ${bgSaturation}%, ${bgLightness}%, ${nonHologrpahicAlpha})`,
    ],
  ];

  renderStops = spreadColorProps(colorStops, spread, 1);

  renderStops.forEach(([stop, color]) => {
    material.addColorStop(parseFloat(stop.toString()), color.toString());
  });

  return material;
};
