'use client';
import getBranchByIndex from '@/app/actions/get-branch';
import Body from './ui/body';

export default function Home(params: any) {
  const branch = getBranchByIndex(params.params.branchIndex)

  return <Body branch={branch}/>;
}
