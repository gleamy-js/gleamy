import { type StaticGradientDefinition } from '../../../types';
import { spreadColorProps } from '../../utils';

const colorStops = [
  [0, '#f6f6f6'],
  [0.08, '#c1c1c1'],
  [0.15, '#d3d3d3'],
  [0.2, '#6a6a6a'],
  [0.3, '#bebebe'],
  [0.4, '#f2f2f2'],
  [0.5, '#9c9c9c'],
  [0.7, '#c3c3c3'],
  [0.76, '#686868'],
  [0.82, '#c1c1c1'],
  [1, '#f6f6f6'],
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
