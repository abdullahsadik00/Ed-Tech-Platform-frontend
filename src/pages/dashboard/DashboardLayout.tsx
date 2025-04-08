import { useState } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarMenu
} from '@/components/ui/sidebar';
import { Header } from '@/components/ui/header';
import { StudentMenu } from '@/components/dashboard/menu/StudentMenu';
import { Overview } from '@/pages/dashboard/components/Overview';
import { Courses } from '@/pages/dashboard/components/Courses';
import { Assignments } from '@/pages/dashboard/components/Assignments';
import { Schedule } from '@/pages/dashboard/components/Schedule';

const DashboardLayout = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0);

  const renderComponent = () => {
    switch (activeMenuIndex) {
      case 0:
        return <Overview />;
      case 1:
        return <Courses />;
      case 2:
        return <Assignments />;
      case 3:
        return <Schedule />;
      default:
        return <Overview />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex flex-1 h-screen overflow-hidden">
        <Sidebar>
          <SidebarHeader className="border-b px-4 py-3">
            <h2 className="text-xl font-bold">EdTech</h2>
          </SidebarHeader>

          <SidebarContent>
            <SidebarMenu>
              <StudentMenu onMenuClick={setActiveMenuIndex} />
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <div className="flex flex-1 flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-auto">
            <div className="container mx-auto p-6">
              {renderComponent()}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;