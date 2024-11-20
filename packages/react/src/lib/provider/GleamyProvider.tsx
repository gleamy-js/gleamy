import { useEffect } from 'react';
import { GleamyContext } from './GleamyContext';
import { type TProvider } from '../../types/provider';
import { type TProviderValues } from '../../types/provider/TProvider';

const animatorsValues = {
  mouseMove: { x: 0, y: 0 },
  scroll: { x: 0, y: 0 },
};

const dpr = typeof window !== 'undefined' ? window.devicePixelRatio : 1;
let ticking = false; // optimizes canvas rendering
let windowWidth = 0;
let windowHeight = 0;

const mouseMoveHandler = (event: MouseEvent): void => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      animatorsValues.mouseMove.x = event.clientX;
      animatorsValues.mouseMove.y = event.clientY;
      ticking = false;
    });
  }

  ticking = true;
};

const resizeHandler = (): void => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
      ticking = false;
    });
  }

  ticking = true;
};

const scrollHandler = (): void => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      animatorsValues.scroll.x = window.scrollX;
      animatorsValues.scroll.y = window.scrollY;
      ticking = false;
    });
  }

  ticking = true;
};

export function GleamyProvider({
  children,
  options = {},
}: TProvider): JSX.Element {
  const gleamySettings = {
    fps: 60,
    devicePixelRatio: dpr,
    defaultAnimator: 'mouseMove',
    animators: animatorsValues,
    windowSize: {
      x: windowWidth,
      y: windowHeight,
    },
    animationEnd: {
      x: 1000,
      y: 1000,
    },
    ...options,
  } as TProviderValues;

  useEffect(() => {
    if (window) {
      window.addEventListener('mousemove', mouseMoveHandler);
      window.addEventListener('scroll', scrollHandler);
      window.addEventListener('resize', resizeHandler);

      // Set initial defaults:
      animatorsValues.scroll.x = window.scrollX;
      animatorsValues.scroll.y = window.scrollY;
    }

    return (): void => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      window.removeEventListener('scroll', scrollHandler);
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return (
    <GleamyContext.Provider value={gleamySettings}>
      {children}
    </GleamyContext.Provider>
  );
}
