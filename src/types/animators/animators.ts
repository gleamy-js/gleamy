export type AnimatorReturn = {
  x: number;
  y: number;
};

export type AnimatorFunction = () => AnimatorReturn;

export type Animator = 'scroll' | 'mouseMove';

export type MaterialAnimator = Animator | AnimatorFunction;
