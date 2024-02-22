'use client';

import { Branch } from '@/app/interface/branch';

import { branches } from '@/app/mockdata/branches';

const getBranchByIndex = (branchIndex: string) => {
  const branch = branches.find((item: Branch) => item.href === branchIndex)
  return branch
};

export default getBranchByIndex;
