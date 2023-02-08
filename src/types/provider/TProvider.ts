import { ReactNode } from 'react';

export type Animators = {
  mouseMove: {
    x: number;
    y: number;
  };
  scroll: {
    x: number;
    y: number;
  };
};

export type AnimatorKey = 'mouseMove' | 'scroll';

export type TProviderValues = {
  fps: number;
  devicePixelRatio: number;
  defaultAnimator: AnimatorKey;
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
