import { StaticGradientDefinition } from '../../types';
import { spreadColorProps } from '../../utils/spreadColorProps';

const colorStops = [
  [0, '#6c3325'],
  [0.08, '#f0d5b2'],
  [0.15, '#fbf3d1'],
  [0.2, '#d39b76'],
  [0.3, '#9f7928'],
  [0.4, '#6a3223'],
  [0.5, '#4d120e'],
  [0.7, '#5d4a1f'],
  [0.75, '#561710'],
  [0.92, '#5c1e13'],
  [1.0, '#6c3325'],
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
