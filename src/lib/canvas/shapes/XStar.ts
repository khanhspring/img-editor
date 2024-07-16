import * as fabric from 'fabric';

import XShape, { XShapeProps } from './XShape';

export const xStarDefaultValues: Partial<fabric.TClassProperties<XStar>> = {
  outerRadius: 50,
  innerRadius: 40,
  sides: 5,
};

export interface UniqueXStarProps {
  outerRadius?: number;
  innerRadius?: number;
  sides?: number;
}

export interface XStarProps extends XShapeProps, UniqueXStarProps {}

export default class XStar<
  Props extends fabric.TOptions<XStarProps> = Partial<XStarProps>,
> extends XShape {
  static type = 'XStar';

  declare outerRadius: number;

  declare innerRadius: number;

  declare sides: number;

  static ownDefaults = xStarDefaultValues;

  static getDefaults(): Record<string, any> {
    return {
      ...super.getDefaults(),
      ...XStar.ownDefaults,
    };
  }

  static cacheProperties = [
    ...fabric.FabricObject.cacheProperties,
    'outerRadius',
    'innerRadius',
    'sides',
  ];

  constructor(
    {
      outerRadius = XStar.ownDefaults.outerRadius!,
      innerRadius = XStar.ownDefaults.innerRadius!,
      sides = XStar.ownDefaults.sides!,
      ...options
    }: Props = {} as Props,
  ) {
    const points = XStar.generatePoints(
      new fabric.Point({ x: 0, y: 0 }),
      sides,
      outerRadius,
      innerRadius,
    );
    super(points, options);
    this.outerRadius = outerRadius;
    this.innerRadius = innerRadius;
    this.sides = sides;
  }

  private static generatePoints(
    center: fabric.Point,
    sides: number,
    outerRadius: number,
    innerRadius: number,
  ) {
    let rot = (Math.PI / 2) * 3;
    const { x: cx, y: cy } = center;
    let x = cx;
    let y = cy;
    const step = Math.PI / sides;

    const points = [];
    for (let i = 0; i < sides; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      points.push({ x, y });

      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      points.push({ x, y });

      rot += step;
    }
    return points;
  }
}

fabric.classRegistry.setClass(XStar);
fabric.classRegistry.setSVGClass(XStar);
