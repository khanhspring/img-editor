'use client';

// next.js app router

import {
  Bars3BottomLeftIcon,
  CloudArrowUpIcon,
  HeartIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';
import * as fabric from 'fabric';
import { ShapesIcon } from 'lucide-react';
import Image from 'next/image';
import { DragEvent, useEffect, useRef } from 'react';

import SideMenuItem from './components/SideMenuItem';
import useEditor from './hooks/useEditor';
import XShape from '@/lib/canvas/shapes/XShape';

const EditorPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { init, saveSvg, canvas } = useEditor();

  useEffect(() => {
    const c = new fabric.Canvas(canvasRef.current!, {
      controlsAboveOverlay: true,
      preserveObjectStacking: true,
    });

    // c?.on('mouse:move', (e) => {
    //   const a = c?.getScenePoint(e.e);
    //   console.log(a);
    // });

    init({
      initialCanvas: c,
      initialContainer: containerRef.current!,
    });

    return () => {
      c.dispose();
    };
  }, [init]);

  const addRect = () => {
    const rect = new fabric.Rect({
      left: 100,
      top: 50,
      fill: '#D81B60',
      width: 50,
      height: 50,
      strokeWidth: 15,
      stroke: '#880E4F',
      rx: 10,
      ry: 10,
      angle: 45,
      scaleX: 3,
      scaleY: 3,
      hasControls: true,
      strokeUniform: true,
      noScaleCache: false,
      id: 'Rectttt',
    });
    canvas?.add(rect);
  };

  const addText = () => {
    const rect = new fabric.Textbox('Lorum ipsum dolor sit amet', {
      left: 700,
      top: 200,
      width: 150,
      fontSize: 20,
      id: 'Texxxxt',
      backgroundColor: 'yellow',
    });
    canvas?.add(rect);
  };

  const addVideo = () => {
    const video1El = document.getElementById('video1') as HTMLVideoElement;
    if (!video1El) return;
    const video1 = new fabric.FabricImage(video1El, {
      left: 200,
      top: 300,
      angle: -15,
      originX: 'center',
      originY: 'center',
      objectCaching: false,
    });

    canvas?.add(video1);
    video1El.load();
    video1El.play();

    fabric.util.requestAnimFrame(function render() {
      canvas?.renderAll();
      fabric.util.requestAnimFrame(render);
    });
  };

  const addStar = () => {
    const aa = [
      {
        x: 349.9,
        y: 75,
      },
      {
        x: 379,
        y: 160.9,
      },
      {
        x: 469,
        y: 160.9,
      },
      {
        x: 397,
        y: 214.9,
      },
      {
        x: 423,
        y: 300.9,
      },
      {
        x: 350,
        y: 249.9,
      },
      {
        x: 276.9,
        y: 301,
      },
      {
        x: 303,
        y: 215,
      },
      {
        x: 231,
        y: 161,
      },
      {
        x: 321,
        y: 161,
      },
    ];
    const polygon = new fabric.Polygon(aa, {
      left: 700,
      top: 200,
      fill: '#D81B60',
      strokeWidth: 4,
      stroke: 'green',
      cornerColor: 'blue',
      noScaleCache: false,
      strokeUniform: true,
      strokeDashArray: [10, 10],
      strokeLineCap: 'round',
      strokeLineJoin: 'bevel',
    });

    // // Adding it to the canvas
    // canvas?.add(polygon);

    // const a = new Star({
    //   points,
    //   fill: 'red',
    //   radius: 2,
    //   left: 1000,
    //   top: 200,
    //   strokeWidth: 2,
    //   stroke: '#880E4F',
    // });
    // canvas?.add(a);
    // const a = new RoundedPolygon(aa, 20);
    // canvas?.add(a);

    const aaaa = new XShape(aa, {
      left: 700,
      top: 200,
      fill: '#D81B60',
      strokeWidth: 2,
      borderRadius: 100,
      stroke: 'green',
      cornerColor: 'blue',
      noScaleCache: false,
      strokeUniform: true,
      strokeLineCap: 'round',
      strokeLineJoin: 'bevel',
    });
    canvas?.add(aaaa);
    canvas?.renderAll();
  };

  const dragElement = (e: DragEvent<HTMLDivElement>) => {
    // console.log(e);
    const el = e.target as HTMLDivElement;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.dataTransfer.setData('position', JSON.stringify({ x, y }));
  };

  const allowDrop = (e: DragEvent) => {
    // console.log(e);
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

  const addStar1 = () => {
    const aaaa = new Star({
      left: 700,
      top: 200,
      fill: '#D81B60',
      strokeWidth: 2,
      stroke: 'green',
      noScaleCache: false,
      strokeUniform: true,

      sides: 4,
      outerRadius: 150,
      innerRadius: 20,
      borderRadius: 0,
    });
    canvas?.add(aaaa);
    canvas?.renderAll();
  };

  const zoomOut = () => {
    let zoomRatio = canvas?.getZoom() || 0;
    zoomRatio -= 0.05;
    const center = canvas?.getCenterPoint();
    canvas?.zoomToPoint(
      new fabric.Point(center!.x, center!.y),
      zoomRatio < 0.2 ? 0.2 : zoomRatio,
    );
  };

  const zoomIn = () => {
    let zoomRatio = canvas?.getZoom() || 0;
    zoomRatio += 0.05;
    const center = canvas?.getCenterPoint();
    canvas?.zoomToPoint(
      new fabric.Point(center!.x, center!.y),
      zoomRatio < 0.2 ? 0.2 : zoomRatio,
    );
  };

  return (
    <div className="grid h-[calc(100vh_-_56px)] grid-cols-[400px_1fr]">
      <aside className="grid grid-cols-[80px_1fr]">
        <div className="border-r-1 border-r-default-200">
          <SideMenuItem
            title="Elements"
            icon={<PuzzlePieceIcon className="h-6 w-6" />}
            onClick={() => {}}
          />
          <SideMenuItem
            title="Shapes"
            icon={<ShapesIcon className="h-6 w-6" strokeWidth={1.5} />}
            onClick={() => {}}
            selected
          />
          <SideMenuItem
            title="Text"
            icon={<Bars3BottomLeftIcon className="h-6 w-6" />}
            onClick={() => {}}
          />
          <SideMenuItem
            title="Icons"
            icon={<HeartIcon className="h-6 w-6" />}
            onClick={() => {}}
          />
          <SideMenuItem
            title="Uploads"
            icon={<CloudArrowUpIcon className="h-6 w-6" />}
            onClick={() => {}}
          />
        </div>
        <div>
          <div>
            <span>Shapes</span>
            <div>
              <div draggable onDragStart={dragElement}>
                <Image
                  src="/images/rectangle.svg"
                  alt="alt"
                  width={100}
                  height={100}
                />
              </div>
              <div draggable onDragStart={dragElement}>
                <Image
                  src="/images/rectangle.svg"
                  alt="alt"
                  width={100}
                  height={100}
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
          <video
            crossOrigin="anonymous"
            id="video1"
            className="hidden"
            width="300"
            height="200"
          >
            <source
              id="video_src1"
              src="https://cdn.pixabay.com/video/2021/10/06/91087-629483817_large.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};

export default EditorPage;
