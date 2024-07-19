import * as fabric from 'fabric';

import { Position } from '../types';

export function renderText(id: string, position: Position) {
  const text1 = new fabric.Textbox('Hello there!', {
    id,
    left: position.left,
    top: position.top - 30,
    width: 300,
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
    fill: '#5C59ED',
    shadow: new fabric.Shadow('2px 3px 0 #FFADE3'),
  });

  const text2 = new fabric.Textbox('Good vibes', {
    id,
    left: position.left,
    top: position.top + 30,
    width: 300,
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fill: '#5C59ED',
    shadow: new fabric.Shadow('2px 3px 0 #FFADE3'),
  });

  text1.on('selected', (e) => {
    e.target.group?.set('interactive', true);
  });
  text2.on('selected', (e) => {
    e.target.group?.set('interactive', true);
  });

  const group = new fabric.Group([text1, text2], {
    interactive: false,
    subTargetCheck: true,
    selectable: true,
    evented: true,
  });

  return group;
}
