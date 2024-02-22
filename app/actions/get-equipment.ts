import { Branch } from '@/app/interface/branch';

import { branches } from '@/app/mockdata/branches';

const getEquipmentByIndex =  (equipmentId: number) => {
  console.log(equipmentId);
  console.log(branches[0].equipments);

};

export default getEquipmentByIndex;
