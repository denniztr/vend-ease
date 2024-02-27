'use client';

import useRoutes from '@/app/hooks/use-routes';
import SidebarItem from './sidebar-item';

const SidebarMenuList = () => {
  const routes = useRoutes();

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
