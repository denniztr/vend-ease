export default async function BranchPage({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <main className="h-full flex flex-col">
      <div>{children}</div>
    </main>
  );
}
