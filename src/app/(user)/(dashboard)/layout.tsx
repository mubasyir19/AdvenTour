import FooterDash from '@/components/Dashboard/FooterDash';
import NavbarDash from '@/components/Dashboard/NavbarDash';
import SidebarDash from '@/components/Dashboard/SidebarDash';
import '../../globals.css';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex h-screen'>
      <SidebarDash />
      <div className='flex flex-1 flex-col overflow-hidden'>
        <NavbarDash />
        <div className='flex-1 overflow-y-auto overflow-x-hidden p-4 px-8'>{children}</div>
        <FooterDash />
      </div>
    </main>
  );
}
