import * as fabric from 'fabric';

import { Position } from '../types';

export async function renderImage(id: string, position: Position) {
  const image = await fabric.FabricImage.fromURL(
    // 'https://media-public.canva.com/fX6MU/MAE2VVfX6MU/1/tl.png',
    'https://video-public.canva.com/VAD8p1cNwYI/v/7d53c3e6e4.gif',
  ).then((img) => {
    img.set('id', id);
    img.set('left', position.left);
    img.set('top', position.top);
    return img;
  });
  return image;
}
