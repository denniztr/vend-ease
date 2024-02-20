'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
  MapIcon,
} from '@heroicons/react/24/solid';

const useRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: 'Главная',
        href: '/dashboard',
        iconPreffix: HomeIcon,
      },
      {
        label: 'Карта',
        href: '/dashboard/map',
        iconPreffix: MapIcon,
      },
      {
        label: 'Сообщения',
        href: '/dashboard/messenger',
        iconPreffix: InboxIcon,
      },
      {
        label: 'Профиль',
        href: '/dashboard/profile',
        iconPreffix: UserCircleIcon,
      },
      {
        label: 'Настройки',
        href: '/dashboard/settings',
        iconPreffix: Cog6ToothIcon,
      },
      {
        label: 'Выход',
        href: '#',
        iconPreffix: PowerIcon,
        onClick: () => {},
      },
    ],
    [pathname]
  );

  return routes;
};

export default useRoutes;
