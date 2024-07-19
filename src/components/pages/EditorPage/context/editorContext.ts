import { createContext } from 'react';

import { EditorContextValue } from '../types';

export const EditorContext = createContext<EditorContextValue>({
  drawShape: () => {},
  drawText: () => {},
});
