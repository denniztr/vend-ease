import Sidebar from '@/app/ui/sidebar/sidebar';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col md:flex-row md:overflow-hidden bg-blue-50/20">
      <div className="w-full flex-none md:w-[20rem]">
        <Sidebar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-8">{children}</div>
    </div>
  );
}
