'use client';

import SidebarItem from './sidebarItem';
import useHomeRoutes from '@/app/navigation/routes/HomeStack'


const SidebarMenuList = () => {
  const routes = useHomeRoutes();
  return (
    <div className="flex flex-col gap-6">
      {routes.map((item) => (
        <SidebarItem
          key={item.label}
          label={item.label}
          href={item.href}
          iconPreffix={item.iconPreffix}
          active={item.active}
        />
      ))}
    </div>
  );
};

export default SidebarMenuList;
