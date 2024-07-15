import * as fabric from 'fabric';

import XShape, { XShapeProps } from './XShape';

export const xRectDefaultValues: Partial<fabric.TClassProperties<XRect>> = {
  width: 100,
  height: 100,
};

export interface XRectProps extends XShapeProps {}

export default class XRect<
  Props extends fabric.TOptions<XRectProps> = Partial<XRectProps>,
> extends XShape {
  static type = 'XRect';

  static ownDefaults = xRectDefaultValues;

  static getDefaults(): Record<string, any> {
    return {
      ...super.getDefaults(),
      ...XRect.ownDefaults,
    };
  }

  constructor(options?: Props) {
    const points = XRect.generatePoints(
      options?.width || XRect.ownDefaults.width!,
      options?.height || XRect.ownDefaults.height!,
    );
    super(points, options);
    Object.assign(this, XRect.ownDefaults);
  }

  private static generatePoints(w: number, h: number) {
    const x = -w / 2;
    const y = -h / 2;
    const points = [
      { x: -x, y },
      { x: x + w, y },
      { x: x + w, y: y + h },
      { x, y },
    ];

    return points;
  }
}

fabric.classRegistry.setClass(XRect);
fabric.classRegistry.setSVGClass(XRect);
