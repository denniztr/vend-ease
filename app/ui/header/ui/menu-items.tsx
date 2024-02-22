import { MenuList, MenuItem, Input } from '@material-tailwind/react';

import { Branch } from '@/app/interface/branch';

interface MenuItemsProps {
  branch: Branch
}

const MenuItems: React.FC<MenuItemsProps> = ({branch}) => {
  return (
    <MenuList>
      <Input
        label="Поиск"
        containerProps={{
          className: 'mb-2',
        }}
      />
      {branch.equipments.map((item) => (
        <MenuItem key={item.id}>{item.label}</MenuItem>
      ))}
    </MenuList>
  );
};

export default MenuItems;
