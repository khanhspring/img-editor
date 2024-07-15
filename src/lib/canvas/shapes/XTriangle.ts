import * as fabric from 'fabric';

import XShape, { XShapeProps } from './XShape';

export const xTriangleDefaultValues: Partial<
  fabric.TClassProperties<XTriangle>
> = {
  width: 100,
  height: 100,
};

export interface XTriangleProps extends XShapeProps {}

export default class XTriangle<
  Props extends fabric.TOptions<XTriangleProps> = Partial<XTriangleProps>,
> extends XShape {
  static type = 'XTriangle';

  static ownDefaults = xTriangleDefaultValues;

  static getDefaults(): Record<string, any> {
    return {
      ...super.getDefaults(),
      ...XTriangle.ownDefaults,
    };
  }

  constructor(options?: Props) {
    const points = XTriangle.generatePoints(
      options?.width || XTriangle.ownDefaults.width!,
      options?.height || XTriangle.ownDefaults.height!,
    );
    super(points, options);
    Object.assign(this, XTriangle.ownDefaults);
  }

  private static generatePoints(width: number, height: number) {
    const x = width / 2;
    const y = height / 2;
    const points = [
      { x: -x, y },
      { x: 0, y: -y },
      { x, y },
    ];

    return points;
  }
}

fabric.classRegistry.setClass(XTriangle);
fabric.classRegistry.setSVGClass(XTriangle);
