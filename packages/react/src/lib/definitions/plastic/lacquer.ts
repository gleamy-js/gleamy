import { type DynamicGradientDefinition } from '../../../types';
import { spreadColorProps } from '../../utils';

export const lacquer = ({
  context,
  pos0X,
  pos0Y,
  pos1X,
  pos1Y,
  spread,
  translucency = 1,
  foilVisibility = 0.05,
}: DynamicGradientDefinition): CanvasGradient => {
  const colorStops = [
    [0.0, `rgba(255,255,255, ${foilVisibility})`],
    [0.48, `rgba(255,255,255, ${foilVisibility})`],
    [0.5, `rgba(255,255,255, ${translucency})`],
    [0.52, `rgba(255,255,255, ${foilVisibility})`],
    [1, `rgba(255,255,255, ${foilVisibility})`],
  ];

  const material = context.createLinearGradient(pos0X, pos0Y, pos1X, pos1Y);
  const renderStops = spread
    ? spreadColorProps(colorStops, spread, 1)
    : colorStops;

  renderStops.forEach(([stop, color]) => {
    material.addColorStop(parseFloat(stop.toString()), color.toString());
  });

  return material;
};
