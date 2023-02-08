import { StaticGradientDefinition } from '../../types';
import { spreadColorProps } from '../../utils/spreadColorProps';

const colorStops = [
  [0.1, '#4d4d4e'],
  [0.4, '#f7f7f9'],
  [0.4, '#95969a'],
  [0.5, '#5e5e5e'],
  [0.55, '#a7abae'],
  [0.56, '#7d7c81'],
  [0.75, '#2e272e'],
  [0.8, '#68696b'],
  [1, '#4d4d4e'],
];

export const gunmetal = ({
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
