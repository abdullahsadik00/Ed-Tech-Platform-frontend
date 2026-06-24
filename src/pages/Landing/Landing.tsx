import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center">Ed-Tech Platform</h1>
      <p className="text-lg text-muted-foreground text-center max-w-md">
        Learn, teach, and grow. Access courses, track progress, and connect with your institution.
      </p>
      <div className="flex gap-4">
        <button
          className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90"
          onClick={() => navigate('/signup')}
        >
          Get Started
        </button>
        <button
          className="px-6 py-3 border border-gray-300 bg-white text-gray-800 rounded-lg font-medium hover:bg-gray-50"
          onClick={() => navigate('/courses')}
        >
          Browse Courses
        </button>
      </div>
    </div>
  );
};

export default Landing;
