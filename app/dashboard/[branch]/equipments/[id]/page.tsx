import getEquipmentByIndex from '@/app/actions/get-equipment';

export default async function Home({ params }: { params: any }) {
  const equipment = await getEquipmentByIndex(params.branch, params.id);
  return (
    <div>
      Оборудование:
      <div>
        {equipment.id} 
        {equipment.label}
        {equipment.address}
        {equipment.equipment}
      </div>
    </div>
  );
}
