import { Canvas } from 'fabric';

import { ShapeType } from '@/types/enums';

export interface EditorContextValue {
  canvas?: Canvas;
  drawShape: (type: ShapeType, position: Position) => void;
  drawText: (id: string, position: Position) => void;
  addImage: (id: string, position: Position) => void;
}

export interface Position {
  left: number;
  top: number;
}

export interface ShapeConfig {
  type: ShapeType;
  title: string;
  icon: string;
}

export interface TextConfig {
  id: string;
  title: string;
  thumbnailUrl: string;
}
