export default async function BranchPage({
  params: { index },
  children,
}: {
  params: {
    index: string;
  };
  children: React.ReactNode;
}) {

  return (
    <main className="h-full">
      <div>{children}</div>
    </main>
  );
}
