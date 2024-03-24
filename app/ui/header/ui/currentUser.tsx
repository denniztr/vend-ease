'use client'

import { User } from '@prisma/client';
import Avatar from '../../avatar';
import { ChevronDownIcon } from '@heroicons/react/24/outline';


interface UserProps {
  user: User
}

const CurrentUser:React.FC<UserProps> = ( {user} ) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <Avatar />
      <p className="text-sm font-semibold">{user?.name} {user?.surname}</p>
      <div className="w-4 h-4">
        <ChevronDownIcon className="text-black cursor-pointer" />
      </div>
    </div>
  );
};

export default CurrentUser;
