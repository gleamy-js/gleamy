import Color from 'color';
import { ParticleDefinition } from 'src/lib/types';

const round = (value: number): number => {
  return Math.round(value * 100) / 100;
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
  const alpha = depthAlpha ? round(depthPercentage) : 1;
  const phase = round(
    intensity *
      Math.sin(
        ((depthPercentage % 2 === 0 ? pos1X : pos1Y) / 100) * Math.PI * alpha,
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
      .darken(phase < 0 ? -phase : 0)
      .fade(-alpha);
  } else {
    color = Color(particleColor)
      .darken(phase < 0 ? -phase : 0)
      .lighten(phase > 0 ? phase : 0)
      .fade(-alpha);
  }

  context.fillStyle = color.string();
};
