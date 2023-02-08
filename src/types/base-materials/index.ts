import { TParticle } from './TParticle';
import { TStaticGradient } from './TStaticGradient';
import { TDynamicGradient } from './TDynamicGradient';

export type { TParticle, TStaticGradient, TDynamicGradient };

export type TMaterialTypes = 'Compound' | 'Particle' | 'Metal' | 'Plastic';

export type Materials = TParticle | TStaticGradient | TDynamicGradient;
