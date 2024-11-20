import { type StaticGradientDefinition } from '../../../types';
import { spreadColorProps } from '../../utils';

const colorStops = [
  [0, '#fff6ee'],
  [0.08, '#b5a89b'],
  [0.15, '#f0e4dc'],
  [0.2, '#f0e6e0'],
  [0.3, '#dacbc3'],
  [0.4, '#fff7f0'],
  [0.5, '#afa7a0'],
  [0.7, '#9e938b'],
  [1, '#fff6ee'],
];

export const silver = ({
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
