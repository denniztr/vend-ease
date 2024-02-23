import getEquipmentByIndex from '@/app/actions/get-equipment';

export default async function Home({ params }: { params: any }) {
  const equipment = await getEquipmentByIndex(params.branch, params.id)
  return (
    <>
      <span>оборудование с id: {params.id}, {params.branch}</span>
    </>
  );
}
