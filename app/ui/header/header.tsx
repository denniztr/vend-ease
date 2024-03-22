import SearchInput from '../input/search';
import HeaderActionItems from './ui/header-action-items';
import CurrentUser from './ui/current-user';

import clsx from 'clsx';


const Header = () => {
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
