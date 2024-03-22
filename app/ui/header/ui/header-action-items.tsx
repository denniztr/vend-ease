'use client';

import useHeaderRoutes from '@/app/hooks/use-header-routes';
import HeaderItem from './header-action-item';

const HeaderActionItems = () => {
  const routes = useHeaderRoutes();

  return (
    <div className="flex flex-row gap-6">
      {routes.map((item) => (
        <HeaderItem key={item.label} label={item.label} icon={item.icon} />
      ))}
    </div>
  );
};

export default HeaderActionItems;
