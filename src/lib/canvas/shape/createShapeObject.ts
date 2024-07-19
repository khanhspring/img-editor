import ShapeUtils from './shapeUtils';
import {
  XCircleOptions,
  XFreeShapeOptions,
  XPolygonOptions,
  XRectOptions,
  XShapeOptions,
  XStarOptions,
  XTriangleOptions,
} from './types';
import XCircle from './XCircle';
import XPolygon from './XPolygon';
import XRect from './XRect';
import XShape from './XShape';
import XStar from './XStar';
import XTriangle from './XTriangle';

function createRect({ border, position, ...rest }: XRectOptions): XRect {
  return new XRect({
    ...ShapeUtils.toXShapeOptions(border),
    ...position,
    ...rest,
  });
}

function createTriangle({
  border,
  position,
  ...rest
}: XTriangleOptions): XTriangle {
  return new XTriangle({
    ...ShapeUtils.toXShapeOptions(border),
    ...position,
    ...rest,
  });
}

function createCircle({ border, position, ...rest }: XCircleOptions): XCircle {
  return new XCircle({
    ...ShapeUtils.toXShapeOptions(border),
    ...position,
    ...rest,
  });
}

function createStar({ border, position, ...rest }: XStarOptions): XStar {
  return new XStar({
    ...ShapeUtils.toXShapeOptions(border),
    ...position,
    ...rest,
  });
}

function createPolygon({
  border,
  position,
  ...rest
}: XPolygonOptions): XPolygon {
  return new XPolygon({
    ...ShapeUtils.toXShapeOptions(border),
    ...position,
    ...rest,
  });
}

function createFreeShape({
  border,
  position,
  points,
  ...rest
}: XFreeShapeOptions): XShape {
  return new XShape(points, {
    ...ShapeUtils.toXShapeOptions(border),
    ...position,
    ...rest,
  });
}

export default function createShapeObject(options: XShapeOptions) {
  switch (options.type) {
    case 'rect':
      return createRect(options);
    case 'triangle':
      return createTriangle(options);
    case 'circle':
      return createCircle(options);
    case 'polygon':
      return createPolygon(options);
    case 'star':
      return createStar(options);
    case 'free':
      return createFreeShape(options);
  }
}
