'use client';

import { useState } from 'react';

import { Menu, MenuHandler } from '@material-tailwind/react';

import { BellIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

import Avatar from '@/app/ui/avatar';

import MenuItems from './ui/menu-items';

import clsx from 'clsx';


interface HeaderProps {
  branch: any;
}

const Header: React.FC<HeaderProps> = ({ branch }) => {
  const [open, setOpen] = useState(false);
  console.log(branch)
  return (
    <div className="w-full py-2 px-6 flex flex-row justify-between items-center">
      <Menu 
        dismiss={{
          itemPress: false,
        }}
      >
        <MenuHandler>
          <div
            className="cursor-pointer p-2 flex flex-row items-center gap-3 transition hover:shadow hover:rounded-sm hover:bg-blue-gray-50/5"
            onClick={() => setOpen(!open)}
          >
            <h4 className="font-semibold text-xl text-gray-700">
              {branch.label}
            </h4>
            <ChevronDownIcon
              className={clsx(`h-4 w-4 text-gray-700`, open && 'rotate-180')}
            /> 
          </div>
        </MenuHandler>
        <MenuItems branch={branch} />
      </Menu>
      <div className=" h-full flex flex-row items-center">
        <div>
          <div className="cursor-pointer">
            <BellIcon className="h-7 w-7 text-gray-600" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-8">
          <hr className="border-gray-400  w-6 h-8 rotate-90" />
          <Avatar />
          <p className="text-black font-semibold">Леонид Иванов</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
