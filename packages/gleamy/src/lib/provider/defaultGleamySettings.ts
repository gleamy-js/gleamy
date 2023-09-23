import { type Animator } from '../../types/animators';
import { type TOptionalProviderValues } from '../../types/provider/TProvider';

const DEFAULT_DEVICE_PIXEL_RATIO = 96;
const DEFAULT_ANIMATOR: Animator = 'mouseMove';
const STATIC_ANIMATION_X_VALUE = 1000;
const STATIC_ANIMATION_Y_VALUE = 1000;
const DEFAULT_FPS = 60;

export const defaultGleamySettings: Partial<TOptionalProviderValues> = {
  fps: DEFAULT_FPS,
  devicePixelRatio: DEFAULT_DEVICE_PIXEL_RATIO,
  defaultAnimator: DEFAULT_ANIMATOR,
  animationEnd: {
    x: STATIC_ANIMATION_X_VALUE,
    y: STATIC_ANIMATION_Y_VALUE,
  },
};
