import { XShapeBorderOptions } from './types';

const strokeDash: Record<'solid' | 'dashed' | 'dotted', number[] | undefined> =
  {
    dashed: [10, 10],
    dotted: [5, 5],
    solid: undefined,
  };

export const toXShapeOptions = (border?: XShapeBorderOptions) => {
  if (!border) return {};
  if (!border.width || !border.style) {
    return {
      borderRadius: border.radius,
    };
  }
  return {
    borderRadius: border.radius,
    strokeWidth: border.width,
    stroke: border.color,
    strokeDashArray: strokeDash[border.style],
  };
};

const ShapeUtils = {
  toXShapeOptions,
};

export default ShapeUtils;
