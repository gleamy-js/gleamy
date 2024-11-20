import { forwardRef } from 'react';
import styled from 'styled-components';
import { GradientMaterial } from './GradientMaterial';
import { type TStaticGradient } from '../../../types';

const Material = styled(GradientMaterial)`
  display: block;
  position: relative;
  transform: translateZ(0);
`;

const Metal = forwardRef<typeof GradientMaterial, TStaticGradient>(
  (props, ref) => {
    const {
      width,
      height,
      acceleration,
      rendering,
      noFill,
      edgeThickness,
      spread,
      material,
      ...rest
    } = props as TStaticGradient;
    return (
      <Material
        ref={ref}
        width={width}
        height={height}
        acceleration={acceleration}
        rendering={rendering}
        noFill={noFill}
        edgeThickness={edgeThickness}
        spread={spread}
        material={material}
        {...rest}
      />
    );
  },
);

Metal.displayName = 'Metal';

export { Metal };
