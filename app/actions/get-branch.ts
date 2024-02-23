import { Branch } from '@/app/interface/branch';

import { branches } from '@/app/mockdata/branches';

const getBranchByIndex = async (branch: string) => {
  return branches.find((item: Branch) => item.path === branch);
};

export default getBranchByIndex;
