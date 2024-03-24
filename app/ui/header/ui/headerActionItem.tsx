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
    <div className="relative">
      <div className="w-2 h-2 bg-orange-600 rounded-full absolute right-0" />
      <Link href="#">
        <Icon
          className={clsx(
            `w-6 h-6 text-gray-500 transition hover:text-gray-700`
          )}
        />
        <span className="sr-only">{label}</span>
      </Link>
    </div>
  );
};

export default HeaderItem;
