import * as fabric from 'fabric';

import XShape, { XShapeProps } from './XShape';

export const xPolygonDefaultValues: Partial<fabric.TClassProperties<XPolygon>> =
  {
    size: 50,
    sides: 5,
  };

export interface UniqueXPolygonProps {
  size?: number;
  sides?: number;
}

export interface XPolygonProps extends XShapeProps, UniqueXPolygonProps {}

export default class XPolygon<
  Props extends fabric.TOptions<XPolygonProps> = Partial<XPolygonProps>,
> extends XShape {
  static type = 'XPolygon';

  declare size: number;

  declare sides: number;

  static ownDefaults = xPolygonDefaultValues;

  static getDefaults(): Record<string, any> {
    return {
      ...super.getDefaults(),
      ...XPolygon.ownDefaults,
    };
  }

  static cacheProperties = [
    ...fabric.FabricObject.cacheProperties,
    'size',
    'sides',
  ];

  constructor(
    {
      size = XPolygon.ownDefaults.size!,
      sides = XPolygon.ownDefaults.sides!,
      ...options
    }: Props = {} as Props,
  ) {
    const points = XPolygon.generatePoints(
      new fabric.Point({ x: 0, y: 0 }),
      sides,
      size,
    );
    const rotateAngle = XPolygon.getRotateAngle(sides);
    super(points, { ...options, rotateAngle });
    Object.assign(this, XPolygon.ownDefaults);
    this.size = size;
    this.sides = sides;
  }

  private static generatePoints(
    center: fabric.Point,
    sides: number,
    size: number,
  ) {
    const { x: cx, y: cy } = center;

    const points = [];
    for (let i = 1; i <= sides; i += 1) {
      const point = {
        x: cx + size * Math.cos((i * 2 * Math.PI) / sides),
        y: cy + size * Math.sin((i * 2 * Math.PI) / sides),
      };

      points.push(point);
    }

    return points;
  }

  private static getRotateAngle(sides: number) {
    let rotateAngle = 0;
    if (sides % 2 === 1) {
      rotateAngle = Math.PI / 2 - (Math.PI / sides) * (sides % 4);
    }
    return rotateAngle;
  }
}

fabric.classRegistry.setClass(XPolygon);
fabric.classRegistry.setSVGClass(XPolygon);
