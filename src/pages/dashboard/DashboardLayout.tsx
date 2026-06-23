import { Outlet } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarMenu,
} from '@/components/ui/sidebar';
import { Header } from '@/components/ui/header';
import { StudentMenu } from '@/components/dashboard/menu/StudentMenu';
import { TeacherMenu } from '@/components/dashboard/menu/TeacherMenu';
import { useAuth } from '@/hooks/use-auth';

const DashboardLayout = () => {
  const { user } = useAuth();

  const renderMenu = () => {
    switch (user?.role) {
      case 'teacher':
      case 'admin':
        return <TeacherMenu />;
      default:
        return <StudentMenu />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex flex-1 h-screen overflow-hidden">
        <Sidebar>
          <SidebarHeader className="border-b px-4 py-3">
            <h2 className="text-xl font-bold">EdTech</h2>
            {user && (
              <p className="text-xs text-muted-foreground capitalize">{user.role}</p>
            )}
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              {renderMenu()}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <div className="flex flex-1 flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto bg-[#f6f6f6]">
            <div className="container mx-auto p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
