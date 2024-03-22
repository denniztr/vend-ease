import { User } from '@prisma/client';
import Avatar from '../avatar';
import SearchInput from '../input/search';
import HeaderActionItems from './ui/header-action-items';

import clsx from 'clsx';
import CurrentUser from './ui/current-user';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="py-5 px-14">
        <div className="flex flex-row justify-between items-center">
          <SearchInput />
          <div className="flex flex-row gap-6 items-center">
            <HeaderActionItems />
            <CurrentUser />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
