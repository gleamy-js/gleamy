type DrawMaterial = {
  drawFunction: () => void;
  fps: number;
};

export const drawMaterial = ({ drawFunction, fps }: DrawMaterial) => {
  const interval = 1000 / fps;
  let now;
  let then = Date.now();
  let delta;

  const draw = () => {
    requestAnimationFrame(draw);

    now = Date.now();
    delta = now - then;

    if (delta > interval) {
      then = now - (delta % interval);
      drawFunction();
    }
  };

  draw();
};
