import { ReactNode } from 'react';
import { Animator, AnimatorReturn } from '../animators';

export type Animators = {
  mouseMove: AnimatorReturn;
  scroll: AnimatorReturn;
};

export type TProviderValues = {
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
};

export type TOptionalProviderValues = TProviderValues & {
  animators: never; // animators should not be overwritten
};

export type TProvider = {
  children: ReactNode;
  options?: Partial<TOptionalProviderValues>;
};
