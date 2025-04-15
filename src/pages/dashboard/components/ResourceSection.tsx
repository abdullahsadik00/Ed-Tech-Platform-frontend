export const ResourceSection = () => {
    const resources = [
      {
        type: 'video',
        title: 'Calculus Fundamentals',
        duration: '12 min',
        category: 'Mathematics'
      },
      {
        type: 'article',
        title: 'Themes in Modern Literature',
        duration: '8 min read',
        category: 'Literature'
      },
      {
        type: 'quiz',
        title: 'Data Structures Practice',
        duration: '15 questions',
        category: 'Computer Science'
      }
    ];
  
    return (
      <section className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Recommended Resources</h2>
          <a href="#" className="text-primary-600 hover:underline">Browse All</a>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <div key={resource.title} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${
                resource.type === 'video' ? 'bg-red-100 text-red-600' :
                resource.type === 'article' ? 'bg-blue-100 text-blue-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {resource.type === 'video' ? '▶️' : resource.type === 'article' ? '📄' : '✍️'}
              </div>
              <h3 className="font-medium mb-1">{resource.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{resource.duration}</p>
              <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded">
                {resource.category}
              </span>
            </div>
          ))}
        </div>
      </section>
    );
  };