'use client';

import useHeaderRoutes from '@/app/hooks/useHeaderRoutes';
import HeaderItem from './headerActionItem';

import HeaderStack from '@/app/navigation/routes/HeaderStack'

const HeaderActionItems = () => {
  const routes = HeaderStack();

  return (
    <div className="flex flex-row gap-6">
      {routes.map((item) => (
        <HeaderItem key={item.label} label={item.label} icon={item.icon} />
      ))}
    </div>
  );
};

export default HeaderActionItems;
