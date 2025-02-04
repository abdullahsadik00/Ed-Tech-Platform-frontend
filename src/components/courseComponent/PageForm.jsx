export default function PageForm({ onSubmit, initialData, onCancel }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Add Page</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Page Title</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            defaultValue={initialData?.title}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            className="w-full p-2 border rounded-lg"
            rows="6"
            defaultValue={initialData?.content}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            Estimated Read Time (minutes)
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg"
            defaultValue={initialData?.readTime || 5}
            min="1"
          />
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
            {initialData ? 'Update Page' : 'Create Page'}
          </button>
        </div>
      </form>
    </div>
  );
}
