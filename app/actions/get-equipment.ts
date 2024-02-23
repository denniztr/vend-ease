import { Branch } from '@/app/interface/branch';

import { branches } from '@/app/mockdata/branches';

const getEquipmentByIndex = async (branch: string, equipmentId: string) => {
 return branches.find((el: Branch) => el.path === branch).equipments.find((el: any) => el.id === Number(equipmentId))
};

export default getEquipmentByIndex;
