import * as fabric from 'fabric';
import { nanoid } from 'nanoid';

import { XYR } from '@/types/common/editor';

import { XObject } from './types';

export const xShapeDefaultValues: Partial<fabric.TClassProperties<XShape>> = {
  borderRadius: 0,
  rotateAngle: 0,
};

export interface UniqueXShapeProps {
  id?: string;
  borderRadius?: number;
  rotateAngle?: number;
}

export interface XShapeProps
  extends fabric.SerializedPolylineProps,
    UniqueXShapeProps {}

export default class XShape<
    Props extends fabric.TOptions<XShapeProps> = Partial<XShapeProps>,
  >
  extends fabric.Polyline
  implements XObject
{
  static type = 'XShape';

  declare id: string;

  declare borderRadius: number;

  declare rotateAngle: number;

  static ownDefaults = xShapeDefaultValues;

  static getDefaults(): Record<string, any> {
    return {
      ...super.getDefaults(),
      ...XShape.ownDefaults,
    };
  }

  static cacheProperties = [
    ...fabric.FabricObject.cacheProperties,
    'id',
    'borderRadius',
    'rotateAngle',
  ];

  constructor(
    points: XYR[] = [],
    {
      id,
      borderRadius = XShape.ownDefaults.borderRadius!,
      rotateAngle = XShape.ownDefaults.rotateAngle!,
      ...options
    }: Props = {} as Props,
  ) {
    super(XShape.rotatePoints(points, rotateAngle), options);
    this.id = id || nanoid();
    this.borderRadius = borderRadius;
    this.rotateAngle = rotateAngle;
    this.noScaleCache = false;
    this.strokeUniform = true;
  }

  public _render(ctx: CanvasRenderingContext2D) {
    const len = this.points.length;
    if (!len) {
      return;
    }
    ctx.beginPath();
    this.roundedPoly(ctx, this.points, this.borderRadius);

    this._renderPaintInOrder(ctx);
  }

  private static rotatePoints(points: XYR[], angle: number) {
    if (angle === 0) return points;
    return points.map((p) => this.rotatePoint(p, angle));
  }

  private static rotatePoint(point: XYR, angle: number) {
    if (angle === 0) return point;

    const newX = point.x * Math.cos(angle) - point.y * Math.sin(angle);
    const newY = point.x * Math.sin(angle) + point.y * Math.cos(angle);
    return { x: newX, y: newY, r: point.r };
  }

  private roundedPoly(
    ctx: CanvasRenderingContext2D,
    points: { x: number; y: number; r?: number }[],
    radiusAll: number,
  ) {
    // Helper function to calculate vector information
    const asVec = (
      p: { x: number; y: number },
      pp: { x: number; y: number },
      v: any,
    ) => {
      v.x = pp.x - p.x;
      v.y = pp.y - p.y;
      v.len = Math.sqrt(v.x * v.x + v.y * v.y);
      v.nx = v.x / v.len;
      v.ny = v.y / v.len;
      v.ang = Math.atan2(v.ny, v.nx);
    };

    let radius: number = radiusAll;
    const v1: any = {};
    const v2: any = {};
    const len: number = points.length;
    let p1: { x: number; y: number } = points[len - 1];

    for (let i = 0; i < len; i++) {
      const p2 = points[i % len];
      const p3 = points[(i + 1) % len];

      // Part 1
      asVec(p2, p1, v1);
      asVec(p2, p3, v2);
      const sinA = v1.nx * v2.ny - v1.ny * v2.nx;
      const sinA90 = v1.nx * v2.nx - v1.ny * -v2.ny;
      let angle = Math.asin(Math.max(-1, Math.min(1, sinA)));

      // Rad and draw direction
      let radDirection = 1;
      let drawDirection = false;

      if (sinA90 < 0) {
        if (angle < 0) {
          angle = Math.PI + angle;
        } else {
          angle = Math.PI - angle;
          radDirection = -1;
          drawDirection = true;
        }
      } else if (angle > 0) {
        radDirection = -1;
        drawDirection = true;
      } else {
        angle = Math.PI * 2 + angle;
      }

      if (p2.r !== undefined) {
        radius = p2.r;
      } else {
        radius = radiusAll;
      }

      // Part 2
      const halfAngle = angle / 2;

      // Part 3
      let lenOut = Math.abs(
        (Math.cos(halfAngle) * radius) / Math.sin(halfAngle),
      );

      // Special part A
      let cRadius;
      if (lenOut > Math.min(v1.len / 2, v2.len / 2)) {
        lenOut = Math.min(v1.len / 2, v2.len / 2);
        cRadius = Math.abs(
          (lenOut * Math.sin(halfAngle)) / Math.cos(halfAngle),
        );
      } else {
        cRadius = radius;
      }

      // Part 4
      let x = p2.x + v2.nx * lenOut;
      let y = p2.y + v2.ny * lenOut;

      // Part 5
      x += -v2.ny * cRadius * radDirection;
      y += v2.nx * cRadius * radDirection;

      // Part 6
      ctx.arc(
        x - this.pathOffset.x,
        y - this.pathOffset.y,
        cRadius,
        v1.ang + (Math.PI / 2) * radDirection,
        v2.ang - (Math.PI / 2) * radDirection,
        drawDirection,
      );

      p1 = p2;
    }

    ctx.closePath();
  }
}

fabric.classRegistry.setClass(XShape);
fabric.classRegistry.setSVGClass(XShape);
