import { type StaticGradientDefinition } from '../../../types';
import { spreadColorProps } from '../../utils';

const colorStops = [
  [0, '#7294d1'],
  [0.08, '#80a0d3'],
  [0.15, '#81c4f9'],
  [0.2, '#a4c2e8'],
  [0.3, '#c1d8f4'],
  [0.4, '#96c4ed'],
  [0.5, '#7cb0e2'],
  [0.7, '#5b8ecf'],
  [0.75, '#0b3669'],
  [0.85, '#497cc5'],
  [0.92, '#4477c3'],
  [1, '#7294d1'],
];

export const blueSteel = ({
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
