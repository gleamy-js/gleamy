export type ComputeRange<
  N extends number,
  Result extends unknown[] = [],
> = Result['length'] extends N
  ? Result
  : ComputeRange<N, [...Result, Result['length']]>;
