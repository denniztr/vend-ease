import { Branch } from '@/app/interface/branch';

import { branches } from '@/app/mockdata/branches';

const getBranchByIndex = async (branch: string) => {
  const branchId = branches.find((item: Branch) => item.href === branch);
  return branchId;
};

export default getBranchByIndex;
