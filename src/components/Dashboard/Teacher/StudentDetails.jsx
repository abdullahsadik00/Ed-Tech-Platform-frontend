const StudentDetails = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-xl p-6 w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex flex-col items-center mb-6">
          <img
            src={student.avatar}
            alt={student.name}
            className="w-24 h-24 rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold">{student.name}</h3>
          <p className="text-gray-600">Student ID: {student.id}</p>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-2">Quiz Results</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Quiz 1 (Auto)</span>
                <span className="font-medium">{student.grades.quiz1}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Quiz 2 (Auto)</span>
                <span className="font-medium">{student.grades.quiz2}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Quiz 3 (Auto)</span>
                <span className="font-medium">{student.grades.quiz3}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Quiz 4 (Manual)</span>
                <span className="font-medium">{student.grades.quiz4}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
