import { DragEvent } from 'react';

import Icon from '@/components/atoms/Icon';
import { ShapeType } from '@/types/enums';

import { shapes } from '../config';
import { SHAPE_SIZE } from '../utils/renderShape';

export default function ShapePanel() {
  const dragElement = (type: ShapeType, e: DragEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (SHAPE_SIZE / rect.width);
    const y = (e.clientY - rect.top) * (SHAPE_SIZE / rect.height);
    e.dataTransfer.setData('position', JSON.stringify({ x, y }));
    e.dataTransfer.setData('origin-size', JSON.stringify({ x, y }));
    e.dataTransfer.setData('shape-type', type);
  };

  return (
    <div className="px-5 py-5">
      <h3>Basic Shapes</h3>
      <div className="grid grid-cols-[repeat(3,1fr)] justify-between gap-2">
        {shapes.map((item) => (
          <div key={item.type} className="flex items-center justify-center">
            <div draggable onDragStart={(e) => dragElement(item.type, e)}>
              <Icon
                name={item.icon}
                className="h-20 w-20 text-default-300"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
