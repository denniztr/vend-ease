import { Branch } from '@/app/interface/branch';

import { branches } from '@/app/mockdata/branches';

const getEquipmentByIndex = async (branch: string, equipmentId: number) => {
  // console.log(equipmentId);
  // console.log(branches[0].equipments);
  console.log(branches);
  console.log(branch, equipmentId);
};

export default getEquipmentByIndex;
