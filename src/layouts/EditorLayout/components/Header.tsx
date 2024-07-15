import Link from 'next/link';
import { ArrowLeftIcon, Cog8ToothIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';

export default function Header() {
  return (
    <header className="flex justify-between bg-gradient-to-r from-[#2f80ed] to-[#41bbe3] px-5 py-2">
      <div>
        <Button isIconOnly variant="light" as={Link} href="/">
          <ArrowLeftIcon className="h-5 w-5 text-white" />
        </Button>
      </div>
      <div className="flex justify-end">
        <Button isIconOnly variant="light">
          <Cog8ToothIcon className="h-5 w-5 text-white" />
        </Button>
      </div>
    </header>
  );
}
