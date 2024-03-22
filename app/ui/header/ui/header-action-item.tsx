'use client';

import Link from 'next/link';
import clsx from 'clsx';

interface HeaderItemProps {
  label: string;
  icon: any;
  active?: boolean;
}

const HeaderItem: React.FC<HeaderItemProps> = ({
  label,
  icon: Icon,
  active,
}) => {
  return (
    <Link href="#">
      <Icon
        className={clsx(`w-6 h-6 text-gray-500 transition hover:text-gray-600`)}
      />
      <span className="sr-only">{label}</span>
    </Link>
  );
};

export default HeaderItem;
