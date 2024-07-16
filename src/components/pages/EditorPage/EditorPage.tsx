'use client';

import { DragEvent } from 'react';

import { CircleIcon, SquareIcon, TriangleIcon } from '@/components/atoms/icons';
import { ImplementedShapeType } from '@/types/enums';

import CanvasFrame from './components/CanvasFrame';
import CanvasFrameContainer from './components/CanvasFrameContainer';
import EditorProvider from './components/EditorContextProvider';
import SideMenu from './components/SideMenu';
import useCanvas from './hooks/useCanvas';

const EditorPage = () => {
  const { canvas, canvasRef, containerRef } = useCanvas();

  const dragElement = (
    type: ImplementedShapeType,
    e: DragEvent<HTMLDivElement>,
  ) => {
    const el = e.target as HTMLDivElement;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.dataTransfer.setData('position', JSON.stringify({ x, y }));
    e.dataTransfer.setData('shape-type', type);
  };

  return (
    <EditorProvider canvas={canvas}>
      <div className="grid h-[calc(100vh_-_56px)] grid-cols-[400px_1fr]">
        <aside className="grid grid-cols-[80px_1fr]">
          <SideMenu />
          <div>
            <div className="px-5 py-5">
              <span>Shapes</span>
              <div className="flex flex-wrap gap-3">
                <div draggable onDragStart={(e) => dragElement('square', e)}>
                  <SquareIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div draggable onDragStart={(e) => dragElement('triangle', e)}>
                  <TriangleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div draggable onDragStart={(e) => dragElement('circle', e)}>
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('4-pointed-star', e)}
                >
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('5-pointed-star', e)}
                >
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('6-pointed-star', e)}
                >
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('8-pointed-star', e)}
                >
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('12-pointed-star', e)}
                >
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('18-pointed-star', e)}
                >
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('20-pointed-star', e)}
                >
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('30-pointed-star', e)}
                >
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div draggable onDragStart={(e) => dragElement('pentagon', e)}>
                  <SquareIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div draggable onDragStart={(e) => dragElement('hexagon', e)}>
                  <SquareIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('arrow-right', e)}
                >
                  <SquareIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('arrow-left', e)}
                >
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div draggable onDragStart={(e) => dragElement('arrow-up', e)}>
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('arrow-down', e)}
                >
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('comment-bubble', e)}
                >
                  <SquareIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
                <div
                  draggable
                  onDragStart={(e) => dragElement('crescent-moon', e)}
                >
                  <CircleIcon
                    className="h-20 w-20 text-default-300"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </aside>
        <div className="grid h-[calc(100vh_-_56px)] grid-rows-[50px_1fr]">
          <div className="bg-red-300">3</div>
          <div className="flex justify-center overflow-auto bg-[#f5f5f5] p-5">
            <CanvasFrameContainer ref={containerRef}>
              <CanvasFrame ref={canvasRef} />
            </CanvasFrameContainer>
          </div>
        </div>
      </div>
    </EditorProvider>
  );
};

export default EditorPage;
