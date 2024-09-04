import {
  Application,
  Assets,
  Graphics,
  Sprite,
  Text,
  TextStyle,
  TilingSprite,
} from 'pixi.js';
import { initDevtools } from '@pixi/devtools';

(async () => {
  const app = new Application();
  await app.init({
    resizeTo: window,
    antialias: true,
  });

  initDevtools({ app });

  app.canvas.style.position = 'absolute';
  document.body.appendChild(app.canvas) as HTMLCanvasElement;

  //   const rectangle = new Graphics()
  //     .rect(200, 200, 200, 180)
  //     .fill({
  //       color: 0xffea00,
  //       alpha: 0.5,
  //     })
  //     .stroke({
  //       width: 8,
  //       color: 0x00ff00,
  //     });
  //   app.stage.addChild(rectangle);

  const textureRoute = await Assets.load('images/route.png');
  const bgSprite = new TilingSprite({
    texture: textureRoute,
    width: app.screen.width,
    height: app.screen.height,
  });
  app.stage.addChild(bgSprite);
  //   bgSprite.tileScale.set(1, 1);
  app.ticker.add(function () {
    bgSprite.tilePosition.y += 2;
  });

  const style = new TextStyle({
    align: 'center',
    fill: '#ffffff',
    fontSize: 40,
    fontStyle: 'italic',
    fontWeight: 'bold',
    stroke: { color: '#4a1850', width: 5 },
    dropShadow: {
      color: '#4a1850',
      blur: 4,
      angle: Math.PI / 6,
      distance: 6,
    },
  });
  const text = new Text({
    text: 'GP Explorer - Car Runner Game',
    style,
  });
  text.position.set(100, 20);
  app.stage.addChild(text);

  const textureCar = await Assets.load('images/formule-4.png');
  const sprite = new Sprite(textureCar);
  sprite._position.set(300, 300);
  sprite.scale.set(0.5);
  sprite.anchor.set(0.5, 0.5);
  sprite.rotation = 0;
  app.stage.addChild(sprite);
})();
