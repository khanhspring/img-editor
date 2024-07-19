import { DragEvent } from 'react';

import Icon from '@/components/atoms/Icon';

import { textList } from '../configs/textConfig';
import { SHAPE_SIZE } from '../utils/renderShape';

export default function TextPanel() {
  const dragElement = (id: string, e: DragEvent<HTMLDivElement>) => {
    const el = e.target as HTMLDivElement;

    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) * (SHAPE_SIZE / rect.width);
    const y = (e.clientY - rect.top) * (SHAPE_SIZE / rect.height);
    e.dataTransfer.setData('position', JSON.stringify({ x, y }));
    e.dataTransfer.setData('text-d', id);
    e.dataTransfer.setData('category', 'text');
  };

  return (
    <div className="px-5 py-5">
      <h3>Basic Text</h3>
      <div className="grid grid-cols-[repeat(3,1fr)] justify-between gap-2">
        {textList.map((item) => (
          <div key={item.id} className="flex items-center justify-center">
            <div draggable onDragStart={(e) => dragElement(item.id, e)}>
              <Icon
                name="SquareIcoon"
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
