import {
  BookOpen,
  LayoutDashboard,
  ClipboardList,
  Calendar,
  BarChart2,
  MessageSquare,
  FolderOpen,
  Settings,
  CalendarDays,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

const menuItems = [
  { to: '/student',           end: true,  icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/student/courses',   end: false, icon: BookOpen,         label: 'My Courses' },
  { to: '/student/assignments', end: false, icon: ClipboardList,  label: 'Assignments' },
  { to: '/student/schedule',  end: false, icon: Calendar,         label: 'Schedule' },
  { to: '/student/grades',    end: false, icon: BarChart2,        label: 'Grades' },
  { to: '/student/calendar',  end: false, icon: CalendarDays,     label: 'Calendar' },
  { to: '/student/messages',  end: false, icon: MessageSquare,    label: 'Messages' },
  { to: '/student/resources', end: false, icon: FolderOpen,       label: 'Resources' },
  { to: '/student/settings',  end: false, icon: Settings,         label: 'Settings' },
];

export function StudentMenu() {
  return (
    <>
      {menuItems.map(({ to, end, icon: Icon, label }) => (
        <SidebarMenuItem key={to}>
          <NavLink to={to} end={end}>
            {({ isActive }) => (
              <SidebarMenuButton tooltip={label} isActive={isActive}>
                <Icon className="h-4 w-4" />
                <span>{label}</span>
              </SidebarMenuButton>
            )}
          </NavLink>
        </SidebarMenuItem>
      ))}
    </>
  );
}
