import { ReactNode, useCallback, useMemo } from 'react';
import { Canvas } from 'fabric';

import { ShapeType } from '@/types/enums';

import { EditorContext } from '../context/editorContext';
import { EditorContextValue, Position } from '../types';
import { renderImage } from '../utils/renderImage';
import { renderShape } from '../utils/renderShape';
import { renderText } from '../utils/renderText';

type Props = {
  children: ReactNode;
  canvas?: Canvas;
};

export default function EditorProvider({ canvas, children }: Props) {
  const drawShape = useCallback(
    (type: ShapeType, position: Position) => {
      if (!canvas) return;
      const shape = renderShape(type, position);
      canvas.add(shape);
      canvas.renderAll();
    },
    [canvas],
  );

  const drawText = useCallback(
    (id: string, position: Position) => {
      if (!canvas) return;
      const text = renderText(id, position);
      canvas.add(text);
      canvas.renderAll();
    },
    [canvas],
  );

  const addImage = useCallback(
    async (id: string, position: Position) => {
      if (!canvas) return;
      const image = await renderImage(id, position);
      canvas.add(image);
      canvas.renderAll();
    },
    [canvas],
  );

  const initValue = useMemo<EditorContextValue>(
    () => ({ canvas, drawShape, drawText, addImage }),
    [canvas, drawShape, drawText, addImage],
  );

  return (
    <EditorContext.Provider value={initValue}>
      {children}
    </EditorContext.Provider>
  );
}
