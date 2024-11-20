import { type StaticGradientDefinition } from '../../../types';
import { spreadColorProps } from '../../utils';

const colorStops = [
  [0, '#8e8e8e'],
  [0.08, '#2d2d2d'],
  [0.15, '#757575'],
  [0.2, '#222222'],
  [0.3, '#424242'],
  [0.4, '#a8a8a8'],
  [0.5, '#676767'],
  [0.7, '#323232'],
  [0.75, '#717171'],
  [1, '#8e8e8e'],
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
