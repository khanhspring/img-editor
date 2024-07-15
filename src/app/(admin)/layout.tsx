import { ReactNode } from 'react';

import PrimaryLayout from '@/layouts/PrimaryLayout';

type Props = {
  children: ReactNode;
};

export default function Admin({ children }: Props) {
  return <PrimaryLayout>{children}</PrimaryLayout>;
}
