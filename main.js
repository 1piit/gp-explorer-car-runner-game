import { Application } from 'pixi.js';

(async () => {
  const app = new Application();

  await app.init({
    resizeTo: window,
    backgroundAlpha: 0.5,
    backgroundColor: 0xffea00,
  });

  app.canvas.style.position = 'absolute';

  document.body.appendChild(app.canvas);
})();
