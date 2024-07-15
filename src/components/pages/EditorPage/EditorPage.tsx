'use client';

import { DragEvent } from 'react';
import * as fabric from 'fabric';

import { SquareIcon } from '@/components/atoms/icons';

import SideMenu from './components/SideMenu';
import useCanvas from './hooks/useCanvas';

const EditorPage = () => {
  const { canvas, canvasRef, containerRef } = useCanvas();

  const dragElement = (e: DragEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.dataTransfer.setData('position', JSON.stringify({ x, y }));
  };

  const allowDrop = (e: DragEvent) => {
    e.preventDefault();
  };

  const dropElement = (e: DragEvent) => {
    e.preventDefault();
    const a = canvas?.getScenePoint(e as any);

    const pos = e.dataTransfer.getData('position');
    const position = JSON.parse(pos) as { x: number; y: number };

    const offsetX = (a?.x || 0) - position.x;
    const offsetY = (a?.y || 0) - position.y;

    const rect = new fabric.Rect({
      left: offsetX,
      top: offsetY,
      fill: '#D81B60',
      width: 100,
      height: 100,
      strokeWidth: 6,
      stroke: '#880E4F',
      rx: 20,
      ry: 20,
      scaleX: 1,
      scaleY: 1,
      hasControls: true,
      strokeUniform: true,
      noScaleCache: false,
      strokeDashArray: [10, 10],
      strokeLineCap: 'round',
    });
    canvas?.add(rect);
  };

  return (
    <div className="grid h-[calc(100vh_-_56px)] grid-cols-[400px_1fr]">
      <aside className="grid grid-cols-[80px_1fr]">
        <SideMenu />
        <div>
          <div className="px-5 py-5">
            <span>Shapes</span>
            <div className="flex gap-3">
              <div draggable onDragStart={dragElement}>
                <SquareIcon
                  className="h-20 w-20 text-default-300"
                  dragable={false}
                />
              </div>
              <div draggable onDragStart={dragElement}>
                <SquareIcon
                  className="h-20 w-20 text-default-300"
                  dragable={false}
                />
              </div>
            </div>
          </div>
        </div>
      </aside>
      <div className="grid h-[calc(100vh_-_56px)] grid-rows-[50px_1fr]">
        <div className="bg-red-300">3</div>
        <div className="flex justify-center overflow-auto bg-[#f5f5f5] p-5">
          <div
            ref={containerRef}
            className="w-full"
            onDragOver={allowDrop}
            onDrop={dropElement}
          >
            <canvas ref={canvasRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
