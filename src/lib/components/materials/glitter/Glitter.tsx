import { Particle } from '../../base-materials';
import { glitter } from '../../../definitions';
import { TGlitter } from '../../../../types';

export const Glitter = ({
  width,
  height,
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
  ...props
}: TGlitter): JSX.Element => (
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
    {...props}
  />
);
