import { Canvas } from 'fabric';

import { ShapeType } from '@/types/enums';

export interface EditorContextValue {
  canvas?: Canvas;
  drawShape: (type: ShapeType, position: ShapeDrawPosition) => void;
}

export interface ShapeDrawPosition {
  left: number;
  top: number;
}

export interface ShapeConfig {
  type: ShapeType;
  title: string;
  icon: string;
}
