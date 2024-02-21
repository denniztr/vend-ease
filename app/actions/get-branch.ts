'use client';

import { branches } from '../mockdata/branches';

const getBranchByIndex = (branchIndex: string) => {
  const branch = branches.find((item) => item.href === branchIndex)
  return branch
};

export default getBranchByIndex;
