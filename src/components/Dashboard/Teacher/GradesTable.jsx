import { useState } from 'react';

const GradesTable = () => {
  const [selectedStudent, setSelectedStudent] = useState(null);

  const students = [
    {
      id: 1,
      name: 'John Doe',
      avatar: 'https://i.pravatar.cc/40?img=1',
      grades: { quiz1: 'B', quiz2: 'B', quiz3: 'B', quiz4: 'A' },
    },
    {
      id: 2,
      name: 'Jane Smith',
      avatar: 'https://i.pravatar.cc/40?img=2',
      grades: { quiz1: 'A', quiz2: 'A', quiz3: 'A', quiz4: 'A' },
    },
    {
      id: 3,
      name: 'Alex Johnson',
      avatar: 'https://i.pravatar.cc/40?img=3',
      grades: { quiz1: '0', quiz2: 'C', quiz3: 'C', quiz4: 'A' },
    },
    // Add more students as needed
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-semibold mb-1">
            Social Media Marketing
          </h2>
          <p className="text-gray-600">Total Students Enrolled: 30</p>
        </div>
        <div className="flex space-x-3">
          <button className="px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:bg-gray-50">
            Filter
          </button>
          <button className="px-4 py-2 bg-[#9b87f5] text-white rounded-lg hover:bg-[#8a74f4]">
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-4 font-medium text-gray-600">
                Student Name
              </th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">
                Quiz 1 (Auto)
              </th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">
                Quiz 2 (Auto)
              </th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">
                Quiz 3 (Auto)
              </th>
              <th className="text-left py-4 px-4 font-medium text-gray-600">
                Quiz 4 (Manual)
              </th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <span>{student.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4">{student.grades.quiz1}</td>
                <td className="py-4 px-4">{student.grades.quiz2}</td>
                <td className="py-4 px-4">{student.grades.quiz3}</td>
                <td className="py-4 px-4">{student.grades.quiz4}</td>
                <td className="py-4 px-4">
                  <button
                    onClick={() => setSelectedStudent(student)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-6">
        <span className="text-gray-600">Show 1 to 10 of 20 results</span>
        <div className="flex space-x-2">
          <button className="px-4 py-2 text-[#9b87f5] hover:bg-gray-50 rounded-lg">
            Previous
          </button>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg">
            Page 1
          </button>
          <button className="px-4 py-2 text-[#9b87f5] hover:bg-gray-50 rounded-lg">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default GradesTable;
