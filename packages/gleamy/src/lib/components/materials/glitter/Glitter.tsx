import { Particle } from '../../base-materials/Particle';
import { glitter } from '../../../definitions/glitter/glitter';
import { type TGlitter } from '../../../../types';

export function Glitter({
  width = 100,
  height = 100,
  acceleration,
  clipPathRef,
  glitterCoverage,
  glitterSize,
  depth,
  depthAlpha,
  glitterColor,
  className,
  rendering,
  backgroundColor,
  clipPathScale,
  intensity,
  hueRotationSpeed,
  animator,
  ...props
}: TGlitter): JSX.Element {
  return (
    <Particle
      width={width}
      height={height}
      acceleration={acceleration}
      clipPathRef={clipPathRef}
      material={glitter}
      particleCoverage={glitterCoverage}
      particleSize={glitterSize}
      particleColor={glitterColor}
      depth={depth}
      className={className}
      depthAlpha={depthAlpha}
      rendering={rendering}
      backgroundColor={backgroundColor}
      clipPathScale={clipPathScale}
      intensity={intensity}
      animator={animator}
      hueRotationSpeed={hueRotationSpeed}
      {...props}
    />
  );
}
