'use client'

import Link from 'next/link';
import clsx from 'clsx';

interface SidebarItemProps {
  label: string;
  href: string;
  iconPreffix: any;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  iconPreffix: Icon,
  active,
}) => {
  return (
    <Link href={href} className={clsx(`px-6`, active && 'border-l-2')}>
      <Icon
        className={clsx(
          `w-6 h-6 text-gray-500 transition hover:text-white`,
          active && 'text-white'
        )}
      />
      <span className="sr-only">{label}</span>
    </Link>
  );
};

export default SidebarItem;
