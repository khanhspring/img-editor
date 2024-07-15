import { XShapeBorderOptions } from './types';

const strokeDash: Record<XShapeBorderOptions['style'], number[] | undefined> = {
  dashed: [10, 10],
  dotted: [5, 5],
  solid: undefined,
};

export const toXShapeOptions = (border?: XShapeBorderOptions) => {
  if (!border) return {};
  if (!border.width) {
    return {
      borderRadius: border.radius,
    };
  }
  return {
    strokeWidth: border.width,
    borderRadius: border.radius,
    stroke: border.color,
    strokeDashArray: strokeDash[border.style],
  };
};

const ShapeUtils = {
  toXShapeOptions,
};

export default ShapeUtils;
