import { DynamicGradientDefinition } from '../../../types';
import { spreadColorProps } from '../../utils/spreadColorProps';

const bgSheenAlpha = 0.05;
const foregroundSheenAlpha = 0.9;
const colorStops = [
  [0.0, `rgba(255,255,255, ${bgSheenAlpha})`],
  [0.4, `rgba(255,255,255, ${bgSheenAlpha})`],
  [0.5, `rgba(255,255,255, ${foregroundSheenAlpha})`],
  [0.6, `rgba(255,255,255, ${bgSheenAlpha})`],
  [1, `rgba(255,255,255, ${bgSheenAlpha})`],
];

export const lacquer = ({
  context,
  pos0X,
  pos0Y,
  pos1X,
  pos1Y,
  spread,
}: DynamicGradientDefinition): CanvasGradient => {
  const material = context.createLinearGradient(pos0X, pos0Y, pos1X, pos1Y);
  const renderStops = spread
    ? spreadColorProps(colorStops, spread, 1)
    : colorStops;

  renderStops.forEach(([stop, color]) => {
    material.addColorStop(parseFloat(stop.toString()), color.toString());
  });

  return material;
};
