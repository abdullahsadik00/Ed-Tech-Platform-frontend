import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import AdminDashboard from './pages/Dashboard/Admin/AdminDashboard';
import ParentDashboard from './pages/Dashboard/Parent/ParentDashboard';
import StudentDashboard from './pages/Dashboard/Student/StudentDashboard';
import TeacherDashboard from './pages/Dashboard/Teacher/TeacherDashboard';
import LandingPage from './pages/LandingPage/LandingPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,  // The App component now serves as the main wrapper
        children: [
            { path: '/', element: <LandingPage /> },
            { path: '/teacher', element: <TeacherDashboard /> },
            { path: '/student', element: <StudentDashboard /> },
            { path: '/parent', element: <ParentDashboard /> },
            { path: '/admin', element: <AdminDashboard /> },
        ],
    },
]);

export default router;
