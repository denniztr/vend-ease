import Sidebar from '@/app/ui/sidebar/sidebar';
import Header from '@/app/ui/header/header';
import getCurrentUser from '@/app/actions/getCurrentUser';

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex flex-col md:flex-row md:overflow-hidden bg-gray-300/50">
      <div className="flex-none md:w-20">
        <Sidebar />
      </div>
      <div className="flex flex-col w-full">
        <Header />
        <div className="flex-grow  md:overflow-y-auto md:py-4 md:px-4">
          {children}
        </div>
      </div>
    </div>
  );
}
