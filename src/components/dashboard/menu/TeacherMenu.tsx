import { BookOpen, LayoutDashboard, Users, ClipboardList, Calendar } from 'lucide-react';
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';
import { NavLink } from 'react-router-dom';

export function TeacherMenu() {
  return (
    <>
      <SidebarMenuItem>
        <NavLink to="/dashboard">
          <SidebarMenuButton tooltip="Dashboard">
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </SidebarMenuButton>
        </NavLink>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <NavLink to="/dashboard/courses">
          <SidebarMenuButton tooltip="Courses">
            <BookOpen className="h-4 w-4" />
            <span>Courses</span>
          </SidebarMenuButton>
        </NavLink>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <NavLink to="/dashboard/students">
          <SidebarMenuButton tooltip="Students">
            <Users className="h-4 w-4" />
            <span>Students</span>
          </SidebarMenuButton>
        </NavLink>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <NavLink to="/dashboard/assignments">
          <SidebarMenuButton tooltip="Assignments">
            <ClipboardList className="h-4 w-4" />
            <span>Assignments</span>
          </SidebarMenuButton>
        </NavLink>
      </SidebarMenuItem>

      <SidebarMenuItem>
        <NavLink to="/dashboard/schedule">
          <SidebarMenuButton tooltip="Schedule">
            <Calendar className="h-4 w-4" />
            <span>Schedule</span>
          </SidebarMenuButton>
        </NavLink>
      </SidebarMenuItem>
    </>
  );
}