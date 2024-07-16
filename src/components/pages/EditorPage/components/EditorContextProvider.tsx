import { ReactNode, useCallback, useMemo } from 'react';
import { Canvas } from 'fabric';

import { ImplementedShapeType } from '@/types/enums';

import { EditorContext } from '../context/editorContext';
import { EditorContextValue, ShapeDrawPosition } from '../types';
import { drawShape as drawShapeFn } from '../utils/drawShape';

type Props = {
  children: ReactNode;
  canvas?: Canvas;
};

export default function EditorProvider({ canvas, children }: Props) {
  const drawShape = useCallback(
    (type: ImplementedShapeType, position: ShapeDrawPosition) => {
      if (!canvas) return;
      drawShapeFn(canvas, type, position);
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
