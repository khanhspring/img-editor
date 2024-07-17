'use client';

import CanvasFrame from './components/CanvasFrame';
import CanvasFrameContainer from './components/CanvasFrameContainer';
import EditorProvider from './components/EditorContextProvider';
import ShapePanel from './components/ShapePanel';
import SideMenu from './components/SideMenu';
import useCanvas from './hooks/useCanvas';

const EditorPage = () => {
  const { canvas, canvasRef, containerRef } = useCanvas();

  return (
    <EditorProvider canvas={canvas}>
      <div className="grid h-[calc(100vh_-_56px)] grid-cols-[400px_1fr]">
        <aside className="grid grid-cols-[80px_1fr]">
          <SideMenu />
          <div>
            <ShapePanel />
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
