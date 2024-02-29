import Avatar from '@/app/ui/avatar';
import { User } from '@prisma/client'

import clsx from 'clsx';

interface HeaderProps {
  user: User
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  console.log(user);
  return (
    <div className="w-full py-2 px-4 md:py-8 md:px-10 bg-gray-200/50">
      <div className="flex flex-row justify-between">
        <h3 className="text-md md:text-3xl">Время Кофе</h3>
        <div className="flex flex-row wrap-nowrap gap-5 items-center">
          <Avatar />
          <div>{user.name} Иванов</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
