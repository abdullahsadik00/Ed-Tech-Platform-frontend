import { createRoutesFromElements, Route } from 'react-router-dom';
import ParentDashboard from '@/pages/dashboard/parent/parent.dashboard';
import TeacherDashboard from '@/pages/dashboard/teacher/teacher.dashboard';
import StudentDashboard from '@/pages/dashboard/student/student.dashboard';
import Landing from '@/pages/Landing/Landing';
import LoginPage from '@/pages/auth/Login';
import Unauthorized from '@/pages/Unauthorized';
import CourseListing from '@/pages/courses/CourseListing';
import CourseDetail from '@/pages/courses/CourseDetail';
import CreateCourse from '@/pages/instructor/CreateCourse';
import CourseEditor from '@/pages/instructor/CourseEditor';
import CoursePlayer from '@/pages/learn/CoursePlayer';
import { ProtectedRoute } from './protectedRoute';
import DashboardLayout from '@/pages/dashboard/DashboardLayout';
import { Overview } from '@/pages/dashboard/components/Overview';
import { Courses } from '@/pages/dashboard/components/Courses';
import { Assignments } from '@/pages/dashboard/components/Assignments';
import { Schedule } from '@/pages/dashboard/components/Schedule';
import Setting from '@/pages/dashboard/components/Setting';

const ComingSoon = ({ label }: { label: string }) => (
  <div className="flex h-48 items-center justify-center text-muted-foreground">
    {label} — coming soon
  </div>
);

export const routes = createRoutesFromElements(
  <Route>
    {/* Public routes */}
    <Route path="/" element={<Landing />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/unauthorized" element={<Unauthorized />} />
    <Route path="/courses" element={<CourseListing />} />
    <Route path="/courses/:id" element={<CourseDetail />} />

    {/* Full-screen player — auth required, no dashboard sidebar */}
    <Route element={<ProtectedRoute />}>
      <Route path="/learn/:courseId" element={<CoursePlayer />} />
    </Route>

    {/* Dashboard routes */}
    <Route element={<ProtectedRoute />}>
      <Route element={<DashboardLayout />}>

        {/* Student routes */}
        <Route path="/student" element={<StudentDashboard />}>
          <Route index element={<Overview />} />
          <Route path="courses" element={<Courses />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="grades" element={<ComingSoon label="Grades" />} />
          <Route path="calendar" element={<ComingSoon label="Calendar" />} />
          <Route path="messages" element={<ComingSoon label="Messages" />} />
          <Route path="resources" element={<ComingSoon label="Resources" />} />
          <Route path="settings" element={<Setting />} />
        </Route>

        {/* Teacher routes */}
        <Route path="/teacher" element={<TeacherDashboard />}>
          <Route index element={<Overview />} />
          <Route path="courses" element={<Courses />} />
          <Route path="courses/new" element={<CreateCourse />} />
          <Route path="courses/:id/edit" element={<CourseEditor />} />
          <Route path="assignments" element={<Assignments />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="students" element={<ComingSoon label="Students" />} />
        </Route>

        {/* Parent routes */}
        <Route path="/parent" element={<ParentDashboard />}>
          <Route index element={<Overview />} />
          <Route path="courses" element={<Courses />} />
          <Route path="progress" element={<Schedule />} />
        </Route>

      </Route>
    </Route>
  </Route>
);
