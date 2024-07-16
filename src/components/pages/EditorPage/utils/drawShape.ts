import { Canvas } from 'fabric';

import createShapeObject from '@/lib/canvas/shapes/createShapeObject';
import { ImplementedShapeType } from '@/types/enums';

import { ShapeDrawPosition } from '../types';

const DEFAULT_WIDTH = 200;
const DEFAULT_HEIGHT = 200;

export function drawShape(
  canvas: Canvas,
  type: ImplementedShapeType,
  position: ShapeDrawPosition,
) {
  switch (type) {
    case 'square': {
      const shape = createShapeObject({
        type: 'rect',
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
        fill: 'red',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 10,
        },
      });
      canvas.add(shape);
      break;
    }
    case 'rounded-square': {
      const shape = createShapeObject({
        type: 'rect',
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
        fill: 'red',
        border: {
          width: 2,
          style: 'solid',
          radius: 10,
        },
        position,
      });
      canvas.add(shape);
      break;
    }
    case 'circle': {
      const shape = createShapeObject({
        type: 'circle',
        radius: 100,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case 'triangle': {
      const shape = createShapeObject({
        type: 'triangle',
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case '4-pointed-star': {
      const shape = createShapeObject({
        type: 'star',
        sides: 4,
        innerRadius: 40,
        outerRadius: 100,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case '5-pointed-star': {
      const shape = createShapeObject({
        type: 'star',
        sides: 5,
        innerRadius: 40,
        outerRadius: 100,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case '6-pointed-star': {
      const shape = createShapeObject({
        type: 'star',
        sides: 6,
        innerRadius: 60,
        outerRadius: 100,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case '8-pointed-star': {
      const shape = createShapeObject({
        type: 'star',
        sides: 8,
        innerRadius: 75,
        outerRadius: 100,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case '12-pointed-star': {
      const shape = createShapeObject({
        type: 'star',
        sides: 12,
        innerRadius: 80,
        outerRadius: 100,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case '18-pointed-star': {
      const shape = createShapeObject({
        type: 'star',
        sides: 18,
        innerRadius: 85,
        outerRadius: 100,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case '20-pointed-star': {
      const shape = createShapeObject({
        type: 'star',
        sides: 20,
        innerRadius: 90,
        outerRadius: 100,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          color: 'red',
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case '30-pointed-star': {
      const shape = createShapeObject({
        type: 'star',
        sides: 30,
        innerRadius: 93,
        outerRadius: 100,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          color: 'black',
          style: 'solid',
          radius: 10,
        },
      });
      canvas.add(shape);
      break;
    }
    case 'pentagon': {
      const shape = createShapeObject({
        type: 'polygon',
        sides: 5,
        size: 100,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 10,
        },
      });
      canvas.add(shape);
      break;
    }
    case 'hexagon': {
      const shape = createShapeObject({
        type: 'polygon',
        sides: 6,
        size: 100,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 10,
        },
      });
      canvas.add(shape);
      break;
    }
    case 'diamond': {
      const shape = createShapeObject({
        type: 'polygon',
        sides: 4,
        size: 100,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 10,
        },
      });
      canvas.add(shape);
      break;
    }
    case 'arrow-right': {
      const shape = createShapeObject({
        type: 'free',
        points: [
          { x: 100, y: 0 },
          { x: 0, y: 100 },
          { x: 0, y: 50 },
          { x: -100, y: 50 },
          { x: -100, y: -50 },
          { x: 0, y: -50 },
          { x: 0, y: -100 },
        ],
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case 'arrow-left': {
      const shape = createShapeObject({
        type: 'free',
        points: [
          { x: 100, y: 0 },
          { x: 0, y: 100 },
          { x: 0, y: 50 },
          { x: -100, y: 50 },
          { x: -100, y: -50 },
          { x: 0, y: -50 },
          { x: 0, y: -100 },
        ],
        rotateAngle: Math.PI,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case 'arrow-up': {
      const shape = createShapeObject({
        type: 'free',
        points: [
          { x: 100, y: 0 },
          { x: 0, y: 100 },
          { x: 0, y: 50 },
          { x: -100, y: 50 },
          { x: -100, y: -50 },
          { x: 0, y: -50 },
          { x: 0, y: -100 },
        ],
        rotateAngle: (3 * Math.PI) / 2,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case 'arrow-down': {
      const shape = createShapeObject({
        type: 'free',
        points: [
          { x: 100, y: 0 },
          { x: 0, y: 100 },
          { x: 0, y: 50 },
          { x: -100, y: 50 },
          { x: -100, y: -50 },
          { x: 0, y: -50 },
          { x: 0, y: -100 },
        ],
        rotateAngle: Math.PI / 2,
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case 'comment-bubble': {
      const shape = createShapeObject({
        type: 'free',
        points: [
          { x: -100, y: 100 },
          { x: 100, y: 100, r: 100 },
          { x: 100, y: -100, r: 100 },
          { x: -100, y: -100, r: 100 },
        ],
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
          radius: 0,
        },
      });
      canvas.add(shape);
      break;
    }
    case 'crescent-moon': {
      const shape = createShapeObject({
        type: 'free',
        points: [
          { x: 4400, y: 2100, r: 500 },
          { x: 4130, y: 2216, r: 700 },
          { x: 4037, y: 2500, r: 70 },
          { x: 4762, y: 2500, r: 70 },
          { x: 4683, y: 2216, r: 700 },
        ],
        fill: '#D81B60',
        position,
        border: {
          width: 2,
          style: 'solid',
        },
      });
      canvas.add(shape);
      break;
    }
    case 'semi-circle':
    case '8-pointed-star-inflated':
  }
}
