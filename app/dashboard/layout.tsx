import Sidebar from '@/app/ui/sidebar/sidebar';
import getCurrentUser from '@/app/actions/get-current-user';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <div className="h-screen flex flex-col md:flex-row md:overflow-hidden bg-blue-50/20">
      <div className="flex-none md:w-20">
        <Sidebar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-8">{children}</div>
    </div>
  );
}
