'use client';

import { Select, Option } from '@material-tailwind/react';


const SelectDefault = () => {
  return (
    <div className="w-40">
      <Select
        label="Филиал"
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <Option>Вариант 1</Option>
        <Option>Вариант 2</Option>
      </Select>
    </div>
  );
};

export default SelectDefault;
