import { ReactNode } from 'react';
import { Button, cn, tv, VariantProps } from '@nextui-org/react';

const variants = tv({
  base: 'flex h-20 w-full cursor-pointer flex-col gap-1 items-center justify-center transition',
  variants: {
    selected: {
      true: 'bg-default-300',
      false: '',
    },
  },
  defaultVariants: {
    selected: false,
  },
});

type Props = {
  icon: ReactNode;
  title: string;
  onClick?: () => void;
} & VariantProps<typeof variants>;

export default function SideMenuItem({
  icon,
  title,
  selected,
  onClick,
}: Props) {
  return (
    <Button
      className={cn(variants({ selected }))}
      onClick={onClick}
      radius="none"
      variant="light"
    >
      {icon}
      <span className="text-sm">{title}</span>
    </Button>
  );
}
