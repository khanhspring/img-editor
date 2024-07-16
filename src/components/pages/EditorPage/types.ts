import { Canvas } from 'fabric';

import { ImplementedShapeType } from '@/types/enums';

export interface EditorContextValue {
  canvas?: Canvas;
  drawShape: (type: ImplementedShapeType, position: ShapeDrawPosition) => void;
}

export interface ShapeDrawPosition {
  left: number;
  top: number;
}
