import { DragEvent, forwardRef, ReactNode } from 'react';

import { ImplementedShapeType } from '@/types/enums';

import useEditorContext from '../hooks/useEditorContext';

type Props = {
  children: ReactNode;
};

const CanvasFrameContainer = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children } = props;

  const { canvas, drawShape } = useEditorContext();

  const allowDrop = (e: DragEvent) => {
    e.preventDefault();
  };

  const dropElement = (e: DragEvent) => {
    e.preventDefault();
    if (!canvas) return;

    const scenePoint = canvas.getScenePoint(e as any);
    const position = JSON.parse(e.dataTransfer.getData('position')) as {
      x: number;
      y: number;
    };

    const left = (scenePoint?.x || 0) - position.x;
    const top = (scenePoint?.y || 0) - position.y;
    const type = e.dataTransfer.getData('shape-type') as ImplementedShapeType;

    drawShape(type, { top, left });
  };
  return (
    <div
      ref={ref}
      className="w-full"
      onDragOver={allowDrop}
      onDrop={dropElement}
    >
      {children}
    </div>
  );
});

CanvasFrameContainer.displayName = 'CanvasFrameContainer';

export default CanvasFrameContainer;
