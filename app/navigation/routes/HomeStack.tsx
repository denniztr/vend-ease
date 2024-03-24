'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

import {
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  HomeIcon,
  MapIcon,
  CalendarIcon
} from '@heroicons/react/24/solid';

const useHomeRoutes = () => {
  const pathname = usePathname();

  const routes = useMemo(
    () => [
      {
        label: 'Главная',
        href: '/dashboard',
        iconPreffix: HomeIcon,
        active: pathname === '/dashboard'
      },
      {
        label: 'Карта',
        href: '/dashboard/map',
        iconPreffix: MapIcon,
        active: pathname === '/dashboard/map'
      },
      {
        label: 'Календарь',
        href: '/dashboard/calendar',
        iconPreffix: CalendarIcon,
        active: pathname === '/dashboard/calendar'
      },
      {
        label: 'Сообщения',
        href: '/dashboard/messenger',
        iconPreffix: InboxIcon,
        active: pathname === '/dashboard/messenger'
      },
      {
        label: 'Профиль',
        href: '/dashboard/profile',
        iconPreffix: UserCircleIcon,
        active: pathname === '/dashboard/profile'
      },
      {
        label: 'Настройки',
        href: '/dashboard/settings',
        iconPreffix: Cog6ToothIcon,
        active: pathname === '/dashboard/settings'
      },
    ],
    [pathname]
  );
  
  return routes;
};

export default useHomeRoutes;