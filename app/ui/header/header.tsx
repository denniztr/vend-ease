import SearchInput from '../input/searchInput';
import HeaderActionItems from './ui/headerActionItems';
import CurrentUser from './ui/currentUser';


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
