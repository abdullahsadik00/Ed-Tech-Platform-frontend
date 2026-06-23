import { BookOpen, LayoutDashboard, Users, ClipboardList, Calendar, Plus } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { SidebarMenuItem, SidebarMenuButton } from '@/components/ui/sidebar';

const menuItems = [
  { to: '/teacher',              end: true,  icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/teacher/courses',      end: false, icon: BookOpen,        label: 'My Courses' },
  { to: '/teacher/courses/new',  end: false, icon: Plus,            label: 'Create Course' },
  { to: '/teacher/students',     end: false, icon: Users,           label: 'Students' },
  { to: '/teacher/assignments',  end: false, icon: ClipboardList,   label: 'Assignments' },
  { to: '/teacher/schedule',     end: false, icon: Calendar,        label: 'Schedule' },
];

export function TeacherMenu() {
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
