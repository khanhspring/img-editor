import * as fabric from 'fabric';

import { Position } from '../types';
import { fabricGif } from './image.fabric';

export async function renderImage(id: string, position: Position) {
  // const image = await fabric.FabricImage.fromURL(
  //   // 'https://media-public.canva.com/fX6MU/MAE2VVfX6MU/1/tl.png',
  //   'https://video-public.canva.com/VAD8p1cNwYI/v/7d53c3e6e4.gif',
  // ).then((img) => {
  //   img.set('id', id);
  //   img.set('left', position.left);
  //   img.set('top', position.top);
  //   return img;
  // });

  const gif = await fabricGif(
    'https://media.giphy.com/media/11RwocOdukxqN2/giphy.gif',
    200,
    200,
  );
  gif.image.set({ ...position });
  return gif.image;
}
