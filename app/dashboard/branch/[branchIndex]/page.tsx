'use client';
import getBranchByIndex from '@/app/actions/get-branch';
import Body from './ui/body';
import Header from '@/app/ui/header/header'

export default function Home(params: any) {
  const branch = getBranchByIndex(params.params.branchIndex)

  return (
    <>
      <Header branch={branch} />
      <Body />
    </>
  )
}
