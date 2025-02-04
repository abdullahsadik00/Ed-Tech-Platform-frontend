export default function CourseForm({ onSubmit, initialData, onCancel }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add Course</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Course Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            defaultValue={initialData?.title}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full p-2 border rounded-lg"
            rows="4"
            defaultValue={initialData?.description}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Duration (weeks)
            </label>
            <input
              type="number"
              className="w-full p-2 border rounded-lg"
              defaultValue={initialData?.duration || 1}
              min="1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Level</label>
            <select className="w-full p-2 border rounded-lg">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {initialData ? 'Update Course' : 'Create Course'}
          </button>
        </div>
      </form>
    </div>
  );
}
