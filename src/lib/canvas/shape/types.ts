import { XYR } from '@/types/common/editor';

export interface XObject {}

export interface XShapeBorderOptions {
  style?: 'solid' | 'dashed' | 'dotted';
  width?: number;
  color?: string;
  radius?: number;
}

export type XShapeType =
  | 'rect'
  | 'triangle'
  | 'circle'
  | 'polygon'
  | 'star'
  | 'free';

export interface XShapeBaseOptions {
  id: string;
  type: XShapeType;
  fill?: string;
  border?: XShapeBorderOptions;
  position: {
    left: number;
    top: number;
  };
  scaleX?: number;
  scaleY?: number;
}

export interface XRectOptions extends XShapeBaseOptions {
  type: 'rect';
  width: number;
  height: number;
}

export interface XTriangleOptions extends XShapeBaseOptions {
  type: 'triangle';
  width: number;
  height: number;
}

export interface XCircleOptions extends XShapeBaseOptions {
  type: 'circle';
  radius: number;
}

export interface XPolygonOptions extends XShapeBaseOptions {
  type: 'polygon';
  sides: number;
  width: number;
}

export interface XStarOptions extends XShapeBaseOptions {
  type: 'star';
  width: number;
  ratio: number;
  sides: number;
}
export interface XFreeShapeOptions extends XShapeBaseOptions {
  type: 'free';
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
