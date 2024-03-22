import Logo from '../../logo';
import SidebarMenuList from './ui/sidebar-menu-list';
import Link from 'next/link';

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
          <Link href="/dashboard/add">
            <div className="w-8 h-8 rounded-xl bg-white flex flex-nowrap justify-center items-center relative">
              <PlusIcon className="p-2 text-black cursor-pointer transition duration-500 hover:rotate-90" />
            </div>
          </Link>
          <div className="w-8 h-8 rounded-xl bg-gray-50/15 flex flex-nowrap justify-center items-center ">
            <ArrowRightStartOnRectangleIcon className="p-2 text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarDesktop;
