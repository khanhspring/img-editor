import ShapeUtils from './shapeUtils';
import {
  XCircleOptions,
  XObject,
  XPolygonOptions,
  XRectOptions,
  XShapeOptions,
  XStarOptions,
  XTriangleOptions,
} from './types';
import XCircle from './XCircle';
import XPolygon from './XPolygon';
import XRect from './XRect';
import XStar from './XStar';
import XTriangle from './XTriangle';

export function createRect({ border, ...rest }: XRectOptions): XRect {
  return new XRect({
    ...ShapeUtils.toXShapeOptions(border),
    ...rest,
  });
}

export function createTriangle({
  border,
  ...rest
}: XTriangleOptions): XTriangle {
  return new XTriangle({
    ...ShapeUtils.toXShapeOptions(border),
    ...rest,
  });
}

export function createCircle({ border, ...rest }: XCircleOptions): XCircle {
  return new XCircle({
    ...ShapeUtils.toXShapeOptions(border),
    ...rest,
  });
}

export function createStar({ border, ...rest }: XStarOptions): XStar {
  return new XStar({
    ...ShapeUtils.toXShapeOptions(border),
    ...rest,
  });
}

export function createPolygon({ border, ...rest }: XPolygonOptions): XPolygon {
  return new XPolygon({
    ...ShapeUtils.toXShapeOptions(border),
    ...rest,
  });
}

export default function createShape(options: XShapeOptions): XObject {
  switch (options.type) {
    case 'rect':
      return createRect(options);
    case 'triangle':
      return createTriangle(options);
    case 'circle':
      return createCircle(options);
    case 'polygon':
      return createPolygon(options);
    case 'start':
      return createStar(options);
  }
}
