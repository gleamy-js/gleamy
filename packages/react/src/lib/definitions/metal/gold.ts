import { type StaticGradientDefinition } from '../../../types';
import { spreadColorProps } from '../../utils';

const colorStops = [
  [0, '#FFFFAC'],
  [0.08, '#FDB931'],
  [0.15, '#D4AF37'],
  [0.2, '#9f7928'],
  [0.3, '#9f7928'],
  [0.4, '#FFFFAC'],
  [0.5, '#5d4a1f'],
  [0.7, '#5d4a1f'],
  [0.75, '#D1B464'],
  [1, '#FFFFAC'],
];

export const gold = ({
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
