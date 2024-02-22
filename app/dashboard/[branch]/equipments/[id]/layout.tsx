'use client';
import getEquipmentByIndex from '@/app/actions/get-equipment';

export default function BranchPage({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { branch: string, id: number };
}) {
  console.log(params);
  const equipment = getEquipmentByIndex(params.id);
  // console.log(equipment)
  return (
    <main className="h-full w-full">
      <span>оборудование с id: {params.id}</span>
      <div>{children}</div>
    </main>
  );
}
