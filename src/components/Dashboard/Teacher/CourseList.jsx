const CourseList = () => {
  const courses = [
    {
      id: 1,
      title: 'UI Design, A User-Centered Approach',
      description:
        'Anim aliqua fugiat consequat minim in sunt aute aliquip labore sint consectetur',
      price: 49,
      rating: 4.8,
      duration: '14 hours',
      lessons: 12,
      image:
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    },
    {
      id: 2,
      title: 'How to Set Up a Design System',
      description:
        'Anim aliqua fugiat consequat minim in sunt aute aliquip labore sint consectetur labore culpa adi',
      price: 79,
      rating: 4.7,
      duration: '14 hours',
      lessons: 12,
      image:
        'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold">Courses</h2>
        <select className="px-4 py-2 border rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#9b87f5]/20">
          <option>Sort by: Newest</option>
          <option>Sort by: Popular</option>
          <option>Sort by: Price</option>
        </select>
      </div>

      <div className="space-y-8">
        {courses.map((course) => (
          <div key={course.id} className="card p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full md:w-1/3">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="w-full md:w-2/3">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {course.title}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-gray-500">May 2021</span>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{course.description}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.lessons} lessons</span>
                    </div>
                  </div>
                  <div className="text-2xl font-semibold">${course.price}</div>
                </div>
                <div className="flex space-x-4">
                  <button className="button-secondary">Add to cart</button>
                  <button className="button-primary">Buy now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="button-secondary">Show all courses</button>
      </div>
    </div>
  );
};

export default CourseList;
