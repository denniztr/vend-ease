import { Branch } from '@/app/interface/branch';

import { branches } from '@/app/mockdata/branches';

const getBranchByIndex = async (branch: string) => {
  const branchId = branches.find((item: Branch) => item.path === branch);
  return branchId;
};

export default getBranchByIndex;
