import { createRoutesFromElements, Route } from 'react-router-dom';
import ParentDashboard from '@/pages/dashboard/parent/parent.dashboard';
import TeacherDashboard from '@/pages/dashboard/teacher/teacher.dashboard';
import StudentDashboard from '@/pages/dashboard/student/student.dashboard';
import Landing from '@/pages/Landing/Landing';
import { ProtectedRoute } from './protectedRoute';
import DashboardLayout from '@/pages/dashboard/DashboardLayout';
import { Overview } from '@/pages/dashboard/components/Overview';
import { Courses } from '@/pages/dashboard/components/Courses';
import { Assignments } from '@/pages/dashboard/components/Assignments';
import { Schedule } from '@/pages/dashboard/components/Schedule';

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Landing />} />
    <Route path="/stud1" element={<StudentDashboard />}/>
    <Route path="/teach1" element={<TeacherDashboard />}/>

    <Route element={<DashboardLayout />}>
        {/* Student Dashboard */}
        <Route path="/stud" element={<StudentDashboard />}>
          <Route index element={<Overview />} />
          <Route path="courses" element={<Courses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Route>

      <Route element={<DashboardLayout />}>
        {/* Teacher Dashboard */}
        <Route path="/teach" element={<TeacherDashboard />}>
          <Route index element={<Overview />} />
          <Route path="courses" element={<Courses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>
      </Route>

    <Route element={<ProtectedRoute />}>
      <Route element={<DashboardLayout />}>
        {/* Student Dashboard */}
        <Route path="/student" element={<StudentDashboard />}>
          <Route index element={<Overview />} />
          <Route path="courses" element={<Courses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>

        {/* Teacher Dashboard */}
        <Route path="/teacher" element={<TeacherDashboard />}>
          <Route index element={<Overview />} />
          <Route path="courses" element={<Courses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="schedule" element={<Schedule />} />
        </Route>

        {/* Parent Dashboard */}
        <Route path="/parent" element={<ParentDashboard />}>
          <Route index element={<Overview />} />
          <Route path="courses" element={<Courses />} />
          <Route path="progress" element={<Schedule />} />
        </Route>
      </Route>
    </Route>
  </Route>
);
