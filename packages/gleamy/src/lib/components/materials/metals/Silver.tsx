import { Metal } from '../../base-materials';
import { silver } from '../../../definitions';
import { type TSilver } from '../../../../types';

export function Silver({
  width = 100,
  height = 100,
  noFill = false,
  acceleration = 1,
  clipPathRef = null,
  edgeThickness = 1,
  spread = 0.5,
  className,
  rendering,
  backgroundColor,
  clipPathScale,
  animator,
  ...props
}: TSilver): JSX.Element {
  return (
    <Metal
      width={width}
      height={height}
      noFill={noFill}
      spread={spread}
      acceleration={acceleration}
      clipPathRef={clipPathRef}
      edgeThickness={edgeThickness}
      material={silver}
      className={className}
      backgroundColor={backgroundColor}
      rendering={rendering}
      clipPathScale={clipPathScale}
      animator={animator}
      {...props}
    />
  );
}
