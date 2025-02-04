export default function UploadForm({ onSubmit, initialData, onCancel }) {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Upload Content</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
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
        <div>
          <label className="block text-sm font-medium mb-1">File</label>
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <input
              type="file"
              className="hidden"
              id="file-upload"
              accept=".pdf,.doc,.docx,.ppt,.pptx"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer text-blue-600 hover:text-blue-700"
            >
              Click to upload
            </label>
            <p className="text-sm text-gray-500 mt-2">
              Support for PDF, DOC, DOCX, PPT, PPTX
            </p>
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
            {initialData ? 'Update Upload' : 'Upload Content'}
          </button>
        </div>
      </form>
    </div>
  );
}
