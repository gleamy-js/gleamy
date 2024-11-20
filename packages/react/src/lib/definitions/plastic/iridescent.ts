import { type DynamicGradientDefinition } from '../../../types';
import { spreadColorProps } from '../../utils';

export const iridescent = ({
  context,
  pos0X,
  pos0Y,
  pos1X,
  pos1Y,
  animatorX,
  animatorY,
  spread,
  translucency = 1,
  hueRotationSpeed = 1,
  foilVisibility = 0.5,
}: DynamicGradientDefinition): CanvasGradient => {
  const hueDegrees =
    Math.floor((Math.atan2(animatorX, animatorY) * 180) / Math.PI) **
    hueRotationSpeed;
  const material = context.createLinearGradient(pos0X, pos0Y, pos1X, pos1Y);
  const saturation = 100 ** hueRotationSpeed;
  const colorOffsetDeg = 45 ** hueRotationSpeed;

  const colorStops = [
    [
      0,
      `hsla(${
        hueDegrees - colorOffsetDeg
      }, ${saturation}%, 50%, ${foilVisibility})`,
    ],
    [
      0.5,
      `hsla(${
        hueDegrees - colorOffsetDeg
      }, ${saturation}%, 50%, ${foilVisibility})`,
    ],
    [0.6, `hsla(${-hueDegrees}, ${saturation}%, 50%, ${translucency})`],
    [
      0.7,
      `hsla(${
        hueDegrees + colorOffsetDeg
      }, ${saturation}%, 50%, ${foilVisibility})`,
    ],
    [
      1,
      `hsla(${
        hueDegrees + colorOffsetDeg
      }, ${saturation}%, 50%, ${foilVisibility})`,
    ],
  ];

  const renderStops = spreadColorProps(colorStops, spread, 1);

  renderStops.forEach(([stop, color]) => {
    material.addColorStop(parseFloat(stop.toString()), color.toString());
  });

  return material;
};
