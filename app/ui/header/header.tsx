import Avatar from '@/app/ui/avatar';
import clsx from 'clsx';

const Header = () => {
  return (
    <div className="w-full py-2 px-4 md:py-8 md:px-10 bg-gray-200/50">
      <div className="flex flex-row justify-between">
        <h3 className="text-md md:text-3xl">Время Кофе</h3>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
