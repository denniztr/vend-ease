import Avatar from '../../avatar';

import { ChevronDownIcon } from '@heroicons/react/24/outline';

const User = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Avatar />
      <p className="text-sm font-semibold">Кирилл Барковский</p>
      <div className="w-4 h-4">
        <ChevronDownIcon className="text-black cursor-pointer" />
      </div>
    </div>
  );
};

export default User;
