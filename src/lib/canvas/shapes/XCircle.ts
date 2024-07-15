import * as fabric from 'fabric';

export interface XCircleProps extends fabric.CircleProps {}

export default class XCircle extends fabric.Circle {
  static type = 'XCircle';
}

fabric.classRegistry.setClass(XCircle);
fabric.classRegistry.setSVGClass(XCircle);
