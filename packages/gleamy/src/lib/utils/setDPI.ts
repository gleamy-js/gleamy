export const setDPI = (canvas: HTMLCanvasElement, dpr: number): void => {
  if (!canvas) {
    return;
  }

  canvas.style.width = canvas.style.width || `${canvas.width}px`;
  canvas.style.height = canvas.style.height || `${canvas.height}px`;

  const scaleFactor = dpr / 96;
  const width = parseFloat(canvas.style.width);
  const height = parseFloat(canvas.style.height);

  const oldScale = canvas.width / width;
  const backupScale = scaleFactor / oldScale;
  const backup = canvas.cloneNode(false) as HTMLCanvasElement;
  const context = canvas.getContext('2d');

  if (!backup) {
    return;
  }

  const backupContext = backup?.getContext('2d');

  if (!(backupContext && context)) {
    return;
  }

  canvas.width = Math.ceil(width * scaleFactor);
  canvas.height = Math.ceil(height * scaleFactor);

  backupContext.drawImage(canvas, 0, 0);
  context.setTransform(backupScale, 0, 0, backupScale, 0, 0);
  context.drawImage(backup, 0, 0);
  context.setTransform(scaleFactor, 0, 0, scaleFactor, 0, 0);
};
