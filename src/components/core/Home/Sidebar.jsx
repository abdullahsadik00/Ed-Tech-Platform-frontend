import React, { useState } from 'react';
import SidebarHeader from '../../Sidebar/sidebarHeader';
import SidebarItem from '../../Sidebar/SidebarItem';
import MobileMenuButton from '../../Sidebar/MobileMenuButton';
import { menuItems } from '../../Sidebar/menuItems';

const Sidebar = ({ setActiveIndex, activeIndex }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleItemClick = (index) => {
    setActiveIndex(index);
    setIsMobileOpen(false);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <MobileMenuButton toggleMobileSidebar={toggleMobileSidebar} />

      {/* Overlay for mobile */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full bg-white dark:bg-slate-900 shadow-xl z-40
          transition-all duration-200 ease-in-out
          ${isCollapsed ? 'w-20' : 'w-64'}
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <SidebarHeader
          isCollapsed={isCollapsed}
          toggleSidebar={toggleSidebar}
        />

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <SidebarItem
                key={item.label}
                item={item}
                index={index}
                isCollapsed={isCollapsed}
                activeIndex={activeIndex}
                onClick={handleItemClick}
              />
            ))}
          </ul>
        </nav>
      </aside>

      {/* Content Margin */}
      <div
        className={`
        transition-all duration-200 ease-in-out
        ${isCollapsed ? 'md:ml-20' : 'md:ml-64'}
      `}
      />
    </>
  );
};

export default Sidebar;
