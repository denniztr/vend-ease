import NewItemButton from '@/app/ui/button/newItemButton';

const EquipmentCard = () => {
  return (
    <div className="bg-white rounded-lg h-full p-4">
      <div className="h-full">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Оборудование</h3>
          <NewItemButton />
        </div>
        СПИСОК
      </div>
    </div>
  );
};

export default EquipmentCard;
