import createShapeObject from '@/lib/canvas/shapes/createShapeObject';
import { XShapeBaseOptions } from '@/lib/canvas/shapes/types';
import { ShapeType } from '@/types/enums';

import { ShapeDrawPosition } from '../types';
import { nanoid } from 'nanoid';

const defaultProps: Omit<XShapeBaseOptions, 'type' | 'position' | 'id'> = {
  fill: '#8D83FF',
  border: {
    width: 2,
    style: 'solid',
    radius: 0,
  },
};

export const SHAPE_SIZE = 160;

function renderPolygon(id: string, sides: number, position: ShapeDrawPosition) {
  return createShapeObject({
    id,
    type: 'polygon',
    width: SHAPE_SIZE,
    sides,
    position,
    ...defaultProps,
  });
}

function renderStar(id: string, sides: number, ratio: number, position: ShapeDrawPosition) {
  return createShapeObject({
    id,
    type: 'star',
    width: SHAPE_SIZE,
    sides,
    ratio,
    position,
    ...defaultProps,
  });
}

export function renderShape(type: ShapeType, position: ShapeDrawPosition) {
  const id = nanoid();
  switch (type) {
    case 'square':
      return createShapeObject({
        id,
        type: 'rect',
        width: SHAPE_SIZE,
        height: SHAPE_SIZE,
        position,
        ...defaultProps,
      });
    case 'circle':
      return createShapeObject({
        id,
        type: 'circle',
        radius: SHAPE_SIZE / 2,
        position,
        scaleX: 1.5,
        scaleY: 1,
        ...defaultProps,
      });
    case 'triangle':
      return createShapeObject({
        id,
        type: 'triangle',
        width: SHAPE_SIZE,
        height: SHAPE_SIZE,
        position,
        ...defaultProps,
      });
    case 'pentagon':
      return renderPolygon(id, 5, position);
    case 'hexagon':
      return renderPolygon(id, 6, position);
    case 'polygon-7':
      return renderPolygon(id, 7, position);
    case 'polygon-8':
      return renderPolygon(id, 8, position);
    case 'polygon-9':
      return renderPolygon(id, 9, position);
    case 'star-5':
      return renderStar(id, 5, 0.55, position);
    case 'star-10':
      return renderStar(id, 10, 0.89, position);
    case 'star-11':
      return renderStar(id, 11, 0.85, position);
    case 'star-12':
      return renderStar(id, 12, 0.89, position);
    case 'star-13':
      return renderStar(id, 13, 0.89, position);
    case 'star-15':
      return renderStar(id, 15, 0.88, position);
    case 'star-19':
      return renderStar(id, 19, 0.88, position);
    case 'star-20':
      return renderStar(id, 20, 0.88, position);
  }
}
