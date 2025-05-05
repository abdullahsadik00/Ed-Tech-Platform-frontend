import React from 'react';

const StudentDashboard: React.FC = () => {
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Student Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg shadow">
                    <h2 className="font-semibold mb-2">Current Courses</h2>
                    <p>Your enrolled courses will appear here</p>
                </div>
                <div className="p-4 border rounded-lg shadow">
                    <h2 className="font-semibold mb-2">Upcoming Assignments</h2>
                    <p>Your pending assignments will appear here</p>
                </div>
                <div className="p-4 border rounded-lg shadow">
                    <h2 className="font-semibold mb-2">Recent Activities</h2>
                    <p>Your recent activities will appear here</p>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;