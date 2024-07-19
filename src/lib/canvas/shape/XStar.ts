import * as fabric from 'fabric';

import XShape, { XShapeProps } from './XShape';

export const xStarDefaultValues: Partial<fabric.TClassProperties<XStar>> = {
  width: 100,
  ratio: 0.5,
  sides: 5,
};

export interface UniqueXStarProps {
  ratio?: number;
  sides?: number;
}

export interface XStarProps extends XShapeProps, UniqueXStarProps {}

export default class XStar<
  Props extends fabric.TOptions<XStarProps> = Partial<XStarProps>,
> extends XShape {
  static type = 'XStar';

  declare ratio: number;

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
    'ratio',
    'sides',
  ];

  constructor(
    {
      width = XStar.ownDefaults.width!,
      ratio = XStar.ownDefaults.ratio!,
      sides = XStar.ownDefaults.sides!,
      ...options
    }: Props = {} as Props,
  ) {
    const outerRadius = width / 2;
    const innerRadius = outerRadius * ratio;
    const points = XStar.generatePoints(
      new fabric.Point({ x: 0, y: 0 }),
      sides,
      outerRadius,
      innerRadius,
    );
    super(points, options);
    this.width = width;
    this.ratio = ratio;
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
