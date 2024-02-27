import Logo from '../../logo';
import SidebarMenuList from './ui/sidebar-menu-list';

import {
  PlusIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/24/solid';

const SidebarDesktop = () => {
  return (
    <div className="hidden md:block md:h-full">
      <div className="h-full w-full flex flex-col justify-between">
        <div className="flex flex-col items-center gap-20">
          <div className="px-2">
            <Logo />
          </div>
          <SidebarMenuList />
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-white flex flex-nowrap justify-center items-center cursor-pointer">
            <PlusIcon className="p-2 text-black" />
          </div>
          <div className="w-10 h-10 rounded-xl bg-gray-50/15 flex flex-nowrap justify-center items-center cursor-pointer">
            <ArrowRightStartOnRectangleIcon className="p-2 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDesktop;
