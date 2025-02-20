'use client';
import { cn } from '@/lib/utils';
import { Role } from '@/types/user';


type SidebarProps = {
    role: Role,
    isOpen: boolean,
    onClose: () => void,
}

export function Sidebar({ role, isOpen, onClose }: SidebarProps) {
    const getLinks = () => {
        const baseLinks = [{ name: 'Dashboard', href: '/dashboard', icon: '🏠' },
        ]

        switch (role) {
            case 'student':
                return [...baseLinks,
                { name: 'My Classes', href: '/student/classes', icon: '🎒' },
                { name: 'Grades', href: '/student/grades', icon: '📈' },
                { name: 'Resources', href: '/student/resources', icon: '📁' }
                ]
            case 'teacher':
                return [...baseLinks,
                { name: 'My Courses', href: '/teacher/courses', icon: '📚' },
                { name: 'Gradebook', href: '/teacher/gradebook', icon: '📝' },
                { name: 'Schedule', href: '/teacher/schedule', icon: '🗓️' }
                ]
            case 'parent':
                return [...baseLinks,
                { name: 'Children', href: '/parent/children', icon: '👨👧' },
                { name: 'Progress', href: '/parent/progress', icon: '📊' },
                { name: 'Attendance', href: '/parent/attendance', icon: '✅' }
                ]
            case 'admin':
                return [...baseLinks,
                { name: 'Users', href: '/admin/users', icon: '👥' },
                { name: 'Analytics', href: '/admin/analytics', icon: '📊' },
                { name: 'Settings', href: '/admin/settings', icon: '⚙️' }
                ]
            default:
                return baseLinks
        }
    }
    return (<aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-72 bg-white border-r transition-transform",
        "transform lg:translate-x-0",
        isOpen ? 'translate-x-0' : '-translate-x-full'
    )}>
        <nav className="h-full flex flex-col">
            <div className="p-4 border-b">
                <h2 className="text-xl font-bold">
                    {role?.toUpperCase()} DASHBOARD
                </h2>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                {getLinks().map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="flex items-center p-3 rounded-lg hover:bg-gray-100 mb-2"
                    >
                        <span className="mr-3 text-xl">{link.icon}</span>
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    </aside>)
}