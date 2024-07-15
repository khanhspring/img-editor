import { ReactNode } from 'react';

import EditorLayout from '@/layouts/EditorLayout';

type Props = {
  children: ReactNode;
};

export default function Editor({ children }: Props) {
  return <EditorLayout>{children}</EditorLayout>;
}
