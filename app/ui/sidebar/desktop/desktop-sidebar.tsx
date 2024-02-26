import AccordionUi from './ui/accordion';
import Link from 'next/link';

import {
  // PlusCircleIcon,
  PlusIcon,
  // SquaresPlusIcon,
} from '@heroicons/react/24/solid';


const SidebarDesktop = () => {
  return (
    <div className="hidden md:block md:h-full md:bg-white md:rounded-md md:shadow-xl md:shadow-blue-gray-900/5 ">
      <div className="p-4 flex flex-row justify-between">
        <h5 className="font-semibold text-gray-700">VendEase</h5>
        <div>
          <Link href='/dashboard/add'>
            <PlusIcon className="h-7 w-7 text-gray-700 cursor-pointer ease-in duration-300 hover:text-gray-800 hover:rotate-90" />
          </Link>        
        </div>
      </div>
      <AccordionUi />
    </div>
  );
};

export default SidebarDesktop;
