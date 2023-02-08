import { StaticGradientDefinition } from '../../types';
import { spreadColorProps } from '../../utils/spreadColorProps';

const colorStops = [
  [0, '#735447'],
  [0.08, '#ab7a73'],
  [0.15, '#ab7a73'],
  [0.2, '#f5c0ba'],
  [0.3, '#f7cac4'],
  [0.4, '#fee1d6'],
  [0.5, '#4d120e'],
  [0.7, '#efbdb8'],
  [0.75, '#f0cfc6'],
  [0.92, '#9f7573'],
  [1, '#735447'],
];

export const rosegold = ({
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
