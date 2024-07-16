import { XYR } from "@/types/common/editor";

export interface XObject {}

export interface XShapeBorderOptions {
  style?: 'solid' | 'dashed' | 'dotted';
  width?: number;
  color?: string;
  radius?: number;
}

export type ShapeType =
  | 'rect'
  | 'triangle'
  | 'circle'
  | 'polygon'
  | 'star'
  | 'free';

export interface XShapeBaseOptions<T extends ShapeType> {
  type: T;
  fill?: string;
  border?: XShapeBorderOptions;
  position: {
    left: number;
    top: number;
  };
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

export interface XStarOptions extends XShapeBaseOptions<'star'> {
  outerRadius: number;
  innerRadius: number;
  sides: number;
}
export interface XFreeShapeOptions extends XShapeBaseOptions<'free'> {
  points: XYR[];
  rotateAngle?: number;
}

export type XShapeOptions =
  | XRectOptions
  | XTriangleOptions
  | XCircleOptions
  | XPolygonOptions
  | XStarOptions
  | XFreeShapeOptions;
