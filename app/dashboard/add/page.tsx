'use client';

import { useState } from 'react';

export default function Home() {
  const [variant, setVariant] = useState<String>('TODO');

  const handleSelectChange = (event:React.ChangeEvent<HTMLSelectElement>) => {
    setVariant(event.target.value);
  };

  return (
    <div className="h-full bg-white rounded-lg p-6">
      <div>
        <select
          name="items"
          id="items"
          onChange={(event) => handleSelectChange(event)}
          className="block w-48 border border-black rounded-md py-2 px-4 focus:outline-none"
        >
          <option value="todo">Добавить задачу</option>
          <option value="equipment">Добавить ТА</option>
          <option value="branch">Добавить филиал</option>
        </select>
      </div>
      <div>{variant}</div>
    </div>
  );
}
