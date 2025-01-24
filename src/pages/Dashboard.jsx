import React, { useState } from 'react';
import Sidebar from '../components/core/Home/Sidebar';
import HomeContent from '../components/Dashboard/Home/HomeContent';
import Header from '../components/Header/Header';
import MyClasses from './MyClasses';
import TableComponent from './TableComponent';
import Grades from './Grades';
import TimeTable from './TimeTable';
import Courses from './Courses';
import Setting from './Setting';
// import { SidebarDemo } from '../components/core/Home/Sidebar1';

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-auto">
      <Sidebar
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        isSidebarCollapsed={isSidebarCollapsed}
      />
      {/* Main content area */}
      <div
        className={`flex-1 bg-primary-50 dark:bg-background ${
          isSidebarCollapsed ? '' : ''
        } transition-all`}
      >
        <Header />
        {/* Render HomeContent only if Home button is clicked */}
        {activeIndex === 0 && <HomeContent />}
        {activeIndex === 1 && <MyClasses />}
        {activeIndex === 2 && <TableComponent />}
        {activeIndex === 3 && <Grades />}
        {activeIndex === 4 && <Courses />}
        {activeIndex === 5 && <TimeTable />}
        {activeIndex === 6 && <Setting />}
      </div>
    </div>
  );
};

export default Dashboard;
