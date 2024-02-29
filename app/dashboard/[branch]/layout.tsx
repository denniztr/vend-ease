import getBranchByIndex from '@/app/actions/get-branch';

export default async function BranchPage({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const branch = await getBranchByIndex(params.branch);
  
  return (
    <main className="h-full flex flex-col">
      <div>{children}</div>
    </main>
  );
}
