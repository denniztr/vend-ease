
export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any,
}) {
  

  return (
    <main className="h-full flex flex-col">
      id layout
      <div>{children}</div>
    </main>
  );
}
