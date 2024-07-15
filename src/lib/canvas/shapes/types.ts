export interface XObject {}

export interface XShapeBorderOptions {
  style: 'solid' | 'dashed' | 'dotted';
  width?: number;
  color?: string;
  radius?: number;
}

export type ShapeType = 'rect' | 'triangle' | 'circle' | 'polygon' | 'start';

export interface XShapeBaseOptions<T extends ShapeType> {
  type: T;
  fill?: string;
  border?: XShapeBorderOptions;
}

export interface XRectOptions extends XShapeBaseOptions<'rect'> {
  width: number;
  height: number;
}

export interface XTriangleOptions extends XShapeBaseOptions<'triangle'> {
  width: number;
  height: number;
}

export interface XCircleOptions extends XShapeBaseOptions<'circle'> {
  radius: number;
}

export interface XPolygonOptions extends XShapeBaseOptions<'polygon'> {
  sides: number;
  size: number;
}

export interface XStarOptions extends XShapeBaseOptions<'start'> {
  outerRadius: number;
  innerRadius: number;
  sides: number;
}

export type XShapeOptions =
  | XRectOptions
  | XTriangleOptions
  | XCircleOptions
  | XPolygonOptions
  | XStarOptions;
