import { useState } from 'react';
import Sidebar from '../components/core/Home/Sidebar';
import HomeContent from '../components/Dashboard/Home/HomeContent';
import Header from '../components/Header/Header';
import MyClasses from './MyClasses';
import TableComponent from './TableComponent';
import Grades from './Grades';
import TimeTable from './TimeTable';
import Courses from './Courses';
import Setting from './Setting';

const Dashboard = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-background dark:bg-background-dark">
      <Sidebar
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
        isSidebarCollapsed={isSidebarCollapsed}
      />
      <div
        className={`flex-1 flex flex-col overflow-hidden ${
          isSidebarCollapsed ? '' : ''
        } transition-all duration-300 ease-in-out`}
      >
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-primary-lightest dark:bg-primary-dark">
          {activeIndex === 0 && <HomeContent />}
          {activeIndex === 1 && <MyClasses />}
          {activeIndex === 2 && <TableComponent />}
          {activeIndex === 3 && <Grades />}
          {activeIndex === 4 && <Courses />}
          {activeIndex === 5 && <TimeTable />}
          {activeIndex === 6 && <Setting />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
