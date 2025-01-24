import React, { useState, useEffect } from 'react';

// Sample data for classes
const sampleClasses = [
  {
    id: 1,
    name: 'Math 10121',
    schedule: 'Monday 9:00 AM - 10:30 AM',
    location: 'Room 203',
    students: ['John Doe', 'Jane Smith', 'Alex Johnson'],
    materials: "Textbook: 'Math for Beginners', Lecture Slides",
  },
  {
    id: 2,
    name: 'English Literature',
    schedule: 'Tuesday 11:00 AM - 12:30 PM',
    location: 'Room 105',
    students: ['Emily Brown', 'Michael Green', 'Sarah White'],
    materials: "Books: 'Shakespeare's Plays', 'The Great Gatsby'",
  },
  {
    id: 3,
    name: 'Physics 202',
    schedule: 'Wednesday 2:00 PM - 3:30 PM',
    location: 'Room 307',
    students: ['David Lee', 'Rachel Clark', 'Lucas Wang'],
    materials: 'Physics Textbook, Lab Equipment',
  },
  {
    id: 4,
    name: 'Chemistry 101',
    schedule: 'Friday 10:00 AM - 11:30 AM',
    location: 'Room 409',
    students: ['Olivia King', 'Daniel Turner', 'Sophia Adams'],
    materials: 'Chemistry Workbook, Lab Notes',
  },
];

const MySchedule = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);
  const [attendance, setAttendance] = useState({});

  useEffect(() => {
    // Initialize with sample class data
    setClasses(sampleClasses);
  }, []);

  const handleClassClick = (classItem) => {
    setSelectedClass(classItem);
    // Initialize attendance state for the selected class
    const initialAttendance = classItem.students.reduce((acc, student) => {
      acc[student] = false; // false means absent
      return acc;
    }, {});
    setAttendance(initialAttendance);
  };

  const handleCheckboxChange = (student) => {
    setAttendance((prev) => ({
      ...prev,
      [student]: !prev[student], // Toggle attendance status
    }));
  };

  const handleSubmitAttendance = () => {
    console.log('Attendance submitted:', attendance);
    // Here you would typically send the attendance data to your backend
    setSelectedClass(null); // Close the modal or reset state
  };

  const handleCloseModal = () => {
    setSelectedClass(null);
  };

  return (
    <div className="schedule-page bg-[#f8f8fe] p-4">
      <h2 className="text-2xl font-bold mb-4">My Schedule</h2>

      {/* Calendar view placeholder */}
      <div className="calendar-view mt-4 mb-6">
        <p>
          Calendar view will be here (you can integrate with [Google Calendar
          API](https://developers.google.com/calendar/api) or other)
        </p>
      </div>

      <div>
        {/* <!-- Example Text: Mobile to Laptop/Tablet --> */}
        <p class="text-sm md:text-base lg:text-lg xl:text-xl">
          This is responsive text that adjusts its size depending on the screen
          size.
        </p>

        {/* <!-- Example Headings: Mobile to Laptop/Tablet --> */}
        <h1 class="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Main Heading
        </h1>
        <h2 class="text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Secondary Heading
        </h2>
      </div>
      {/* List of Classes */}
      <ul className="class-list mt-4 space-y-4">
        {classes.map((classItem) => (
          <li
            key={classItem.id}
            className="class-item p-4 border rounded-md bg-white shadow-sm cursor-pointer"
          >
            <h3 className="font-semibold">{classItem.name}</h3>
            <p>
              <strong>Schedule:</strong> {classItem.schedule}
            </p>
            <p>
              <strong>Location:</strong> {classItem.location}
            </p>
            <button
              onClick={() => handleClassClick(classItem)}
              className="mt-2 text-blue-600 hover:text-blue-800"
            >
              View Details
            </button>
          </li>
        ))}
      </ul>

      {/* Class Details Modal */}
      {selectedClass && (
        <div className="class-details-modal bg-white p-6 mt-6 rounded-md shadow-lg fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <div className="modal-content bg-gray-100 p-6 rounded-md w-1/2 shadow-lg">
            <h3 className="text-2xl font-bold">{selectedClass.name}</h3>
            <p>
              <strong>Schedule:</strong> {selectedClass.schedule}
            </p>
            <p>
              <strong>Location:</strong> {selectedClass.location}
            </p>
            <p>
              <strong>Students:</strong> {selectedClass.students.join(', ')}
            </p>
            <p>
              <strong>Materials:</strong> {selectedClass.materials}
            </p>

            <h4 className="mt-4 font-semibold">Mark Attendance</h4>
            <ul>
              {selectedClass.students.map((student) => (
                <li key={student} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={attendance[student]}
                    onChange={() => handleCheckboxChange(student)}
                  />
                  <label className="ml-2">{student}</label>
                </li>
              ))}
            </ul>
            <button
              onClick={handleSubmitAttendance}
              className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              Submit Attendance
            </button>
            <button
              onClick={handleCloseModal}
              className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MySchedule;
