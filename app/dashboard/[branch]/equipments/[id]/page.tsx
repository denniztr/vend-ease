import getEquipmentByIndex from '@/app/actions/get-equipment';
import Body from './ui/body';

export default async function Home({ params }: { params: any }) {
  const equipment = await getEquipmentByIndex(params.branch, params.id);
  return (
    <div className="h-full flex flex-col gap-2">
      <div className="py-4 flex flex-col gap-1 text-md text-gray-600 font-semibold">
        <p>
          <span className="font-medium">Название точки: </span>
          {equipment.label}
        </p>
        <p>
          <span className="font-medium">Адрес: </span>
          {equipment.address},
        </p>
        <p>
          <span className="font-medium">Оборудование: </span>
          {equipment.equipment}
        </p>
        <p>
          <span className="font-medium">Серийный номер: </span>
          {equipment.serial_number}
        </p>
      </div>
      <Body equipment={equipment} />
    </div>
  );
}
