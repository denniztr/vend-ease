import { MenuList, MenuItem, Input } from '@material-tailwind/react';
import Link from 'next/link';
import { Branch } from '@/app/interface/branch';

interface MenuItemsProps {
  branch: Branch;
}

const MenuItems: React.FC<MenuItemsProps> = ({ branch }) => {
  return (
    <MenuList>
      {/* <Input
        label="Поиск"
        containerProps={{
          className: 'mb-2',
        }}
      /> */}
      <div className="max-h-[20rem] overflow-y-auto">
        {branch.equipments.map((item) => (
          <Link
            key={item.id}
            href="/dashboard/[branch]/equipments/[id]"
            as={`/dashboard/${branch.path}/equipments/${item.id}`}
          >
            <MenuItem>{item.label}</MenuItem>
          </Link>
        ))}
      </div>
    </MenuList>
  );
};

export default MenuItems;
