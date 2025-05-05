export const CourseSection = () => {
    const courses = [
      {
        title: "Advanced Mathematics",
        progress: 65,
        instructor: "Dr. Robert Chen",
        thumbnail: "math-thumb.jpg"
      },
      {
        title: "Literature & Composition",
        progress: 90,
        instructor: "Prof. Emily Wilson",
        thumbnail: "lit-thumb.jpg"
      },
      {
        title: "Computer Science Principles",
        progress: 45,
        instructor: "Dr. Alan Turing",
        thumbnail: "cs-thumb.jpg"
      }
    ];
  
    return (
      <section className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">My Courses</h2>
          <a href="#" className="text-primary-600 hover:underline">View All</a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.title} {...course} />
          ))}
        </div>
      </section>
    );
  };
interface CourseCardTypes {
    title: string,
    progress: number, instructor: string, thumbnail: string
}
  
  const CourseCard = ({ title, progress, instructor, thumbnail }:CourseCardTypes) => (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
      <div className="h-32 bg-gray-200 relative">
        <img 
          src={thumbnail} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
          <h3 className="text-white font-medium">{title}</h3>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-gray-600 mb-3">Instructor: {instructor}</p>
        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <button className="w-full mt-3 bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg text-sm font-medium transition">
          Continue Learning
        </button>
      </div>
    </div>
  );