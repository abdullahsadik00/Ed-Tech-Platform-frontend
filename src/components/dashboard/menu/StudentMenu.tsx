import { BookOpen, LayoutDashboard, GraduationCap, Calendar } from 'lucide-react';
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

interface StudentMenuProps {
  onMenuClick: (index: number) => void;
}

export function StudentMenu({ onMenuClick }: StudentMenuProps) {
  return (
    <>
      <SidebarMenuItem onClick={() => onMenuClick(0)}>
        <SidebarMenuButton tooltip="Dashboard">
          <LayoutDashboard className="h-4 w-4" />
          <span>Dashboard</span>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem onClick={() => onMenuClick(1)}>
        <SidebarMenuButton tooltip="My Courses">
          <BookOpen className="h-4 w-4" />
          <span>My Courses</span>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem onClick={() => onMenuClick(2)}>
        <SidebarMenuButton tooltip="Assignments">
          <GraduationCap className="h-4 w-4" />
          <span>Assignments</span>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem onClick={() => onMenuClick(3)}>
        <SidebarMenuButton tooltip="Schedule">
          <Calendar className="h-4 w-4" />
          <span>Schedule</span>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem onClick={() => onMenuClick(4)}>
        <SidebarMenuButton tooltip="Schedule">
          <Calendar className="h-4 w-4" />
          <span>Grades</span>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem onClick={() => onMenuClick(5)}>
        <SidebarMenuButton tooltip="Schedule">
          <Calendar className="h-4 w-4" />
          <span>Calendar</span>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem onClick={() => onMenuClick(6)}>
        <SidebarMenuButton tooltip="Schedule">
          <Calendar className="h-4 w-4" />
          <span>Messages</span>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem onClick={() => onMenuClick(7)}>
        <SidebarMenuButton tooltip="Schedule">
          <Calendar className="h-4 w-4" />
          <span>Resources</span>
        </SidebarMenuButton>
      </SidebarMenuItem>

      <SidebarMenuItem onClick={() => onMenuClick(8)}>
        <SidebarMenuButton tooltip="Schedule">
          <Calendar className="h-4 w-4" />
          <span>Profile & Settings</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </>
  );
}