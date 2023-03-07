import Color from 'color';
import { ParticleDefinition } from '../../../types';

const round = (value: number): number => {
  return Math.floor(value * 100) / 1000;
};

export const glitter = ({
  context,
  pos1X,
  pos1Y,
  particleColor,
  depthPercentage,
  depthAlpha,
  intensity,
}: ParticleDefinition): void => {
  const alpha = depthAlpha ? round(depthPercentage) : 0.5;
  const phase =
    10 *
    round(
      intensity *
        Math.sin(
          ((depthPercentage % 2 === 0 ? pos1X : pos1Y) / 1000) * Math.PI,
        ),
    );

  let color = Color('black');

  if (particleColor === 'holographic') {
    const rotation = round(
      Math.sin(((depthPercentage % 2 === 0 ? pos1X : pos1Y) / 100) * Math.PI),
    );

    color = Color('blue')
      .rotate(rotation * 360)
      .lighten(phase > 0 ? phase : 0)
      .darken(phase < 0 ? -phase : 0);
  } else {
    color = Color(particleColor)
      .darken(phase < 0 ? -phase : 0)
      .lighten(phase > 0 ? phase : 0);
  }

  if (depthAlpha) {
    context.fillStyle = color.fade(alpha).string();
  } else {
    context.fillStyle = color.string();
  }
};
