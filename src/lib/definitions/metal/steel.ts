import { StaticGradientDefinition } from '../../types';
import { spreadColorProps } from '../../utils/spreadColorProps';

const colorStops = [
  [0, '#c1c1c1'],
  [0.08, '#f6f6f6'],
  [0.15, '#d3d3d3'],
  [0.275, '#6a6a6a'],
  [0.3, '#bebebe'],
  [0.445, '#f2f2f2'],
  [0.556, '#9c9c9c'],
  [0.69, '#c3c3c3'],
  [0.765, '#686868'],
  [0.82, '#f6f6f6'],
  [1, '#c1c1c1'],
];

export const steel = ({
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
