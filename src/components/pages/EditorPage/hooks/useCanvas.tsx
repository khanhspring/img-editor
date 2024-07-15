import { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric';

export default function useCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvas, setCanvas] = useState<fabric.Canvas>();

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const initCanvas = new fabric.Canvas(canvasRef.current, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    fabric.FabricObject.prototype.noScaleCache = false;
    fabric.FabricObject.prototype.set({
      cornerColor: '#fff',
      cornerStyle: 'circle',
      borderColor: '#3b82f6',
      borderScaleFactor: 1.5,
      transparentCorners: false,
      borderOpacityWhenMoving: 1,
      cornerStrokeColor: '#3b82f6',
    });

    const initialWorkspace = new fabric.Rect({
      width: 900,
      height: 1200,
      name: 'clip',
      fill: 'white',
      selectable: false,
      hasControls: false,
      shadow: new fabric.Shadow({
        color: 'rgba(0,0,0,0.8)',
      }),
    });

    initCanvas.setWidth(containerRef.current.offsetWidth);
    initCanvas.setHeight(containerRef.current.offsetHeight);

    initCanvas.add(initialWorkspace);
    initCanvas.centerObject(initialWorkspace);
    initCanvas.clipPath = initialWorkspace;
    setCanvas(initCanvas);

    return () => {
      initCanvas.dispose();
    };
  }, []);

  return { canvas, containerRef, canvasRef };
}
