import { StaticGradientDefinition } from '../../../types';
import { spreadColorProps } from '../../utils/spreadColorProps';

const colorStops = [
  [0, '#ffd4ac'],
  [0.08, '#a87a60'],
  [0.15, '#cf855b'],
  [0.2, '#efa16d'],
  [0.3, '#83614b'],
  [0.4, '#e4b291'],
  [0.5, '#774532'],
  [0.7, '#984d22'],
  [1.0, '#ffd4ac'],
];


export const copper = ({
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
