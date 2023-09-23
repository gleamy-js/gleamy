import { type StaticGradientDefinition } from '../../../types';
import { spreadColorProps } from '../../utils/spreadColorProps';

const colorStops = [
  [0, '#fee1d6'],
  [0.08, '#9f7573'],
  [0.15, '#fcb2a7'],
  [0.2, '#f5c0ba'],
  [0.3, '#d2aba6'],
  [0.4, '#fee1d6'],
  [0.5, '#4d120e'],
  [0.7, '#9f7573'],
  [0.75, '#f0cfc6'],
  [0.92, '#9f7573'],
  [1, '#fee1d6'],
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
