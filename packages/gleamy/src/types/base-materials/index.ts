import { type TParticle } from './TParticle';
import { type TStaticGradient } from './TStaticGradient';
import { type TDynamicGradient } from './TDynamicGradient';

export type { TParticle, TStaticGradient, TDynamicGradient };

export type TMaterialTypes = 'Compound' | 'Particle' | 'Metal' | 'Plastic';

export type Materials = TParticle | TStaticGradient | TDynamicGradient;
