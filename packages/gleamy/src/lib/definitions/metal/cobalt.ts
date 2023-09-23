import { type StaticGradientDefinition } from '../../../types';
import { spreadColorProps } from '../../utils/spreadColorProps';

const colorStops = [
  [0, '#031627'],
  [0.08, '#14357c'],
  [0.15, '#133179'],
  [0.2, '#0f2451'],
  [0.3, '#0d2046'],
  [0.4, '#11223a'],
  [0.5, '#24467a'],
  [0.7, '#386fbf'],
  [0.8, '#3d78d3'],
  [0.98, '#174486'],
  [1, '#031627'],
];

export const cobalt = ({
  context,
  pos0X,
  pos0Y,
  pos1X,
  pos1Y,
  spread,
}: StaticGradientDefinition): CanvasGradient => {
  const material = context.createLinearGradient(pos0X, pos0Y, pos1X, pos1Y);
  const renderStops = spread
    ? spreadColorProps(colorStops, spread, 1)
    : colorStops;

  renderStops.forEach(([stop, color]) => {
    material.addColorStop(parseFloat(stop.toString()), color.toString());
  });

  return material;
};
