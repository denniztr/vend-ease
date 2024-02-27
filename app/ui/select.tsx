'use client';

import { Select, Option } from '@material-tailwind/react';

const SelectDefault = () => {
  return (
    <div className="w-72">
      <Select label="Добавить...">
        <Option>Тест</Option>
        <Option>Тест1</Option>
        <Option>Тест2</Option>
      </Select>
    </div>
  );
}

export default SelectDefault;