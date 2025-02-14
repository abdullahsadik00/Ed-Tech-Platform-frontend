import { ChevronLeft, ChevronRight } from 'lucide-react';

const SidebarHeader = ({ isCollapsed, toggleSidebar }) => {
  return (
    <div className="flex items-center justify-between h-16 px-4 border-b border-border">
      <h1
        className={`font-bold text-xl text-primary-600 transition-opacity duration-200
        ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}
      `}
      >
        Dashboard
      </h1>
      <button
        onClick={toggleSidebar}
        className="p-2 rounded-lg hover:bg-primary-100 hidden md:block"
      >
        {isCollapsed ? (
          <ChevronRight className="w-5 h-5 text-primary-600" />
        ) : (
          <ChevronLeft className="w-5 h-5 text-primary-600" />
        )}
      </button>
    </div>
  );
};

export default SidebarHeader;
