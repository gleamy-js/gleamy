import { type ReactNode } from 'react';
import { type Animator, type AnimatorReturn } from '../animators';

export interface Animators {
  mouseMove: AnimatorReturn;
  scroll: AnimatorReturn;
}

export interface TProviderValues {
  fps: number;
  devicePixelRatio: number;
  defaultAnimator: Animator;
  animators: Animators;
  windowSize: {
    x: number;
    y: number;
  };
  animationEnd: {
    x: number;
    y: number;
  };
}

export type TOptionalProviderValues = TProviderValues & {
  animators: never; // animators should not be overwritten
};

export interface TProvider {
  children: ReactNode;
  options?: Partial<TOptionalProviderValues>;
}
