export default async function BranchPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-full">
      <div>{children}</div>
    </main>
  );
}
