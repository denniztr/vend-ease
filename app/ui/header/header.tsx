import { User } from '@prisma/client';
import SearchInput from '../input/search';


import clsx from 'clsx';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="py-5 px-14">
        <div className="flex flex-row justify-between items-center">
          <SearchInput />
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
