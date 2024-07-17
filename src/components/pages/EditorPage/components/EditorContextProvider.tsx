import { ReactNode, useCallback, useMemo } from 'react';
import { Canvas, Group } from 'fabric';

import { ShapeType } from '@/types/enums';

import { EditorContext } from '../context/editorContext';
import { EditorContextValue, ShapeDrawPosition } from '../types';
import { renderShape } from '../utils/renderShape';

type Props = {
  children: ReactNode;
  canvas?: Canvas;
};

export default function EditorProvider({ canvas, children }: Props) {
  const drawShape = useCallback(
    (type: ShapeType, position: ShapeDrawPosition) => {
      if (!canvas) return;
      const shape = renderShape(type, position);
      canvas.add(shape);
      canvas.renderAll();
    },
    [canvas],
  );

  const initValue = useMemo<EditorContextValue>(
    () => ({ canvas, drawShape }),
    [canvas, drawShape],
  );

  return (
    <EditorContext.Provider value={initValue}>
      {children}
    </EditorContext.Provider>
  );
}
