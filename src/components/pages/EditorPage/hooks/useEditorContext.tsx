import { useContext } from 'react';

import { EditorContext } from '../context/editorContext';

export default function useEditorContext() {
  const value = useContext(EditorContext);

  return value;
}
