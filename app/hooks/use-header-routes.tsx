'use client';

import { useMemo } from 'react';
import { BellAlertIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const UseHeaderRoutes = () => {
  const routes = useMemo(() => [
    {
      label: 'Сообщения',
      Icon: EnvelopeIcon,
    },
    {
      label: 'Уведомления',
      Icon: BellAlertIcon,
    },
  ], []);

  return routes;
};

export default UseHeaderRoutes;
