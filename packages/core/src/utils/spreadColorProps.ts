import { type ColorStops } from '@gleamy/types';

export const spreadColorProps = (
  colorStops: ColorStops,
  scaledMin: number,
  scaledMax: number,
): ColorStops => {
  const numberArray = colorStops.map(([stop]) => parseFloat(stop.toString()));
  const max = Math.max(...numberArray);
  const min = Math.min(...numberArray);

  return colorStops.map((colorStop) => {
    const [stop, color] = colorStop;
    const newNumber =
      ((scaledMax - scaledMin) * (parseFloat(stop.toString()) - min)) /
        (max - min) +
      scaledMin;
    return [newNumber.toFixed(2), color];
  });
};
