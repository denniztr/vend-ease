'use client';

import { useMemo } from 'react';
import { BellAlertIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const useHeaderRoutes = () => {
  const routes = useMemo(() => [
    {
      label: 'Сообщения',
      icon: EnvelopeIcon,
    },
    {
      label: 'Уведомления',
      icon: BellAlertIcon,
    },
  ], []);

  return routes;
};

export default useHeaderRoutes;
