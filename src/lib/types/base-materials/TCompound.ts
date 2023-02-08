import { TBase } from './TBase';
import { TDynamicGradient } from './TDynamicGradient';
import { TParticle } from './TParticle';
import { TStaticGradient } from './TStaticGradient';

export type TCompound = TBase &
  (TDynamicGradient | TStaticGradient | TParticle);
