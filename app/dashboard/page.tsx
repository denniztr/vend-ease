import TodoCard from '@/app/ui/card/todoCard';
import ParkCard from '@/app/ui/card/parkCard';
import MapCard from '@/app/ui/card/mapCard';
import BranchesCard from '@/app/ui/card/branchCard';
import EquipmentCard from '@/app/ui/card/equipmentCard';

import { data } from '@/app/mockdata/data';

export default function Home() {
  console.log(data);
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="h-1/2 grid grid-cols-3 gap-4">
        <TodoCard />
        <div className="flex flex-col gap-4">
          <div className=" flex flex-row justify-between gap-2">
            {data.map((item) => (
              <ParkCard
                key={item.id}
                label={item.label}
                quantity={item.quantity}
                styles={item.styles}
              />
            ))}
          </div>
          <div className="h-full">
            <MapCard />
          </div>
        </div>
        <div>
          <BranchesCard />
        </div>
      </div>
      <div className="h-1/2">
        <EquipmentCard />
      </div>
    </div>
  );
}
