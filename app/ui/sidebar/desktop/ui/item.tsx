import Link from 'next/link';

import { ListItem, ListItemPrefix } from '@material-tailwind/react';

interface SidebarItemProps {
  label: string;
  href: string;
  iconPreffix: any;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  iconPreffix: IconPreffix,
}) => {
  return (
    <Link href={href}>
      <ListItem>
        <ListItemPrefix>
          <IconPreffix className="h-5 w-5" />
        </ListItemPrefix>
        <span>{label}</span>
      </ListItem>
    </Link>
  );
};

export default SidebarItem;
