import { User } from '@prisma/client';
import SearchInput from '../input/searchInput';
import HeaderActionItems from './ui/headerActionItems';
import CurrentUser from './ui/currentUser';

interface HeaderProps {
  user: User
}

const Header:React.FC<HeaderProps> = ({ user }) => {
  return (
    <div className="w-full bg-white shadow-sm">
      <div className="py-5 px-14">
        <div className="flex flex-row justify-between items-center">
          <SearchInput />
          <div className="flex flex-row gap-6 items-center">
            <HeaderActionItems />
            <CurrentUser user={user} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
