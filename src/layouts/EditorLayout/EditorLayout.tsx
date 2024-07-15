import { ReactNode } from 'react';

import Header from './components/Header';

type Props = {
  children: ReactNode;
};

export default function EditorLayout({ children }: Props) {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <main>{children}</main>
    </div>
  );
}
