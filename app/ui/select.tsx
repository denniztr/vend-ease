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
        <Option>Великие Луки</Option>
        <Option>Псков</Option>
        <Option>Санкт Петербург</Option>
        <Option>Москва</Option>
        <Option>Смоленск</Option>
        <Option>Тверь</Option>
        <Option>Брянск</Option>
        <Option>Сочи</Option>
      </Select>
    </div>
  );
};

export default SelectDefault;
