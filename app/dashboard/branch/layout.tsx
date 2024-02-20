import getBranchByIndex from '@/app/actions/get-branch';

// доделать динамическое получение значений из url

export default async function BranchPage({
  params,
  children,
}: {
  params: {
    branchIndex: string;
  };
  children: React.ReactNode;
}) {


  return (
    <main className="h-full flex flex-col">
      <div>{children}</div>
    </main>
  );
}
