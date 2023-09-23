import { type TBase } from './TBase';
import { type TDynamicGradient } from './TDynamicGradient';
import { type TParticle } from './TParticle';
import { type TStaticGradient } from './TStaticGradient';

export type TCompound = TBase &
  (TDynamicGradient | TStaticGradient | TParticle);
