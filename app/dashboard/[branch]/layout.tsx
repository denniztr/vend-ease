import getBranchByIndex from '@/app/actions/get-branch';
import Header from '@/app/ui/header/header';

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
      <Header branch={branch} />
      <div>{children}</div>
    </main>
  );
}
