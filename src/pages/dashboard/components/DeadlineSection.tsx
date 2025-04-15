export const DeadlineSection = () => {
    const deadlines = [
      { 
        title: "Math Problem Set", 
        course: "Advanced Mathematics", 
        due: "Tomorrow, 11:59 PM",
        priority: "high"
      },
      { 
        title: "Literature Essay Draft", 
        course: "Literature & Composition", 
        due: "In 3 days",
        priority: "medium" 
      },
      { 
        title: "CS Project Proposal", 
        course: "Computer Science", 
        due: "Next Monday",
        priority: "low" 
      }
    ];
  
    return (
      <section className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">Upcoming Deadlines</h2>
        <div className="space-y-4">
          {deadlines.map((item) => (
            <div key={item.title} className="flex items-start p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition">
              <div className={`w-2 h-12 rounded-full mr-4 ${
                item.priority === 'high' ? 'bg-red-500' : 
                item.priority === 'medium' ? 'bg-yellow-500' : 'bg-gray-400'
              }`}></div>
              <div className="flex-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.course}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">{item.due}</p>
                <button className="mt-1 text-sm text-primary-600 hover:underline">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };