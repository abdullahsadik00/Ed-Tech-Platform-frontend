const TeacherProfile = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-2/3">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <a href="#" className="hover:text-gray-900">
              Home
            </a>
            <span>/</span>
            <a href="#" className="hover:text-gray-900">
              UI/UX Design
            </a>
            <span>/</span>
            <span className="text-gray-900">Teacher's profile</span>
          </nav>

          <div className="flex items-center space-x-6 mb-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Kiara Weaver"
              className="w-24 h-24 rounded-full"
            />
            <div>
              <h1 className="text-3xl font-semibold mb-2">Kiara Weaver</h1>
              <p className="text-gray-600 mb-2">Senior UI/UX Designer</p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>New York • 09:30 AM</span>
              </div>
              <div className="flex space-x-2 mt-2">
                <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                  Teacher
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                  Designer
                </span>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
              Adipisicing ipsum commodo cupidatat Lorem id velit laborum laborum
              proident. Nulla voluptate deserunt ipsum dolor nostrud dolor eu
              sint elit aliqua excepteur dolor velit voluptate mollit aliqua na.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-2xl font-semibold mb-1">4.8</div>
              <div className="text-gray-500 text-sm">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold mb-1">1000+</div>
              <div className="text-gray-500 text-sm">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold mb-1">12</div>
              <div className="text-gray-500 text-sm">Courses</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold mb-1">1000+</div>
              <div className="text-gray-500 text-sm">Students</div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 space-y-6">
          <div className="card p-6">
            <button className="w-full button-primary mb-4">Follow</button>
            <button className="w-full button-secondary">Message</button>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold mb-4">Rating Distribution</h3>
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center">
                  <span className="w-8 text-sm text-gray-600">{rating}</span>
                  <div className="flex-1 h-2 bg-gray-100 rounded-full mx-2">
                    <div
                      className="h-2 bg-[#9b87f5] rounded-full"
                      style={{ width: `${(6 - rating) * 20}%` }}
                    />
                  </div>
                  <span className="w-8 text-sm text-gray-600">
                    {(6 - rating) * 20}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold mb-4">Response Time</h3>
            <p className="text-gray-600">Very responsive to messages</p>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold mb-4">Certificates</h3>
            <p className="text-gray-600">Google UX Design Professional</p>
          </div>

          <div className="card p-6">
            <h3 className="font-semibold mb-4">Profile Link</h3>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value="https://kiara-design.com"
                readOnly
                className="flex-1 bg-gray-50 px-3 py-2 rounded text-sm"
              />
              <button className="text-[#9b87f5] hover:text-[#8a74f4]">
                Copy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherProfile;
