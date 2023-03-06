import { ColorStops } from '../../../types';
import { DynamicGradientDefinition } from '../../../types/materialdefinitions/DynamicGradientDefinition';
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
  translucency = 1,
  hueRotationSpeed = 1,
  foilVisibility = 0.1,
}: DynamicGradientDefinition): CanvasGradient => {
  const hueRotation = hueRotationSpeed || 1;
  const colorSpreadOffset = 80;
  const material = context.createLinearGradient(pos0X, pos0Y, pos1X, pos1Y);
  const angleDeg =
    Math.ceil(
      ((Math.atan2(animatorY, animatorX) * 360) / Math.PI) * hueRotation,
    ) || 1;
  const saturation = 100;
  const flatSaturationReduction = 100;

  let renderStops = [] as ColorStops;

  const background = Math.floor(
    angleDeg -
      (angleDeg / flatSaturationReduction > 0
        ? angleDeg / flatSaturationReduction
        : -angleDeg / flatSaturationReduction) +
      hueRotation * 10,
  );
  const bg = (background > 0 ? background : -background) || 0;
  const bgSaturation =
    saturation - flatSaturationReduction > 0
      ? saturation - flatSaturationReduction
      : -(saturation - flatSaturationReduction);

  const colorStops = [
    [0, `hsla(${bg}, ${bgSaturation}%, 50%, ${foilVisibility.toString()})`],
    [0.57, `hsla(${bg}, ${bgSaturation}%, 50%, ${foilVisibility.toString()})`],
    [
      0.59,
      `hsla(${
        angleDeg - colorSpreadOffset
      }, ${saturation}%, 50%, ${translucency.toString()})`,
    ],
    [0.6, `hsla(${angleDeg}, ${saturation}%, 50%, ${translucency.toString()})`],
    [
      0.61,
      `hsla(${
        angleDeg + colorSpreadOffset
      }, ${saturation}%, 50%, ${translucency.toString()})`,
    ],
    [0.62, `hsla(${bg}, ${bgSaturation}%, 50%, ${foilVisibility.toString()})`],
    [0.75, `hsla(${bg}, ${bgSaturation}%, 50%, ${foilVisibility.toString()})`],
    [
      0.77,
      `hsla(${
        angleDeg - colorSpreadOffset
      }, ${saturation}%, 50%, ${translucency.toString()})`,
    ],
    [0.8, `hsla(${angleDeg}, ${saturation}%, 50%, ${translucency.toString()})`],
    [
      0.83,
      `hsla(${
        angleDeg + colorSpreadOffset
      }, ${saturation}%, 50%, ${translucency})`,
    ],
    [0.9, `hsla(${bg}, ${bgSaturation}%, 50%, ${foilVisibility.toString()})`],
    [1.0, `hsla(${bg}, ${bgSaturation}%, 50%, ${foilVisibility.toString()})`],
  ];

  renderStops = spreadColorProps(colorStops, spread, 1);

  renderStops.forEach(([stop, color]) => {
    material.addColorStop(parseFloat(stop.toString()), color.toString());
  });

  return material;
};
