import {
  Bars3BottomLeftIcon,
  CloudArrowUpIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon, ShapesIcon } from 'lucide-react';

import SideMenuItem from './SideMenuItem';

export default function SideMenu() {
  return (
    <div className="border-r-1 border-r-default-200">
      <SideMenuItem
        title="Elements"
        icon={<PuzzlePieceIcon className="h-6 w-6" />}
        onClick={() => {}}
      />
      <SideMenuItem
        title="Shapes"
        icon={<ShapesIcon className="h-6 w-6" strokeWidth={1.5} />}
        onClick={() => {}}
        selected
      />
      <SideMenuItem
        title="Text"
        icon={<Bars3BottomLeftIcon className="h-6 w-6" />}
        onClick={() => {}}
      />
      <SideMenuItem
        title="Icons"
        icon={<HeartIcon className="h-6 w-6" />}
        onClick={() => {}}
      />
      <SideMenuItem
        title="Uploads"
        icon={<CloudArrowUpIcon className="h-6 w-6" />}
        onClick={() => {}}
      />
    </div>
  );
}
