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

  constructor({
    width = XRect.ownDefaults.width!,
    height = XRect.ownDefaults.height!,
    ...options
  }: Props) {
    const points = XRect.generatePoints(width, height);
    super(points, options);
  }

  private static generatePoints(w: number, h: number) {
    const x = -w;
    const y = -h;
    const points = [
      { x, y },
      { x: x + w, y },
      { x: x + w, y: y + h },
      { x, y: y + h },
    ];

    console.log(points);

    return points;
  }
}

fabric.classRegistry.setClass(XRect);
fabric.classRegistry.setSVGClass(XRect);
