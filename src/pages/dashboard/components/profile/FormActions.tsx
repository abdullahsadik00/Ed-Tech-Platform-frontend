
const FormActions = ({ isSubmitting }: any) => {
  return (
    <div className="flex justify-end gap-4 pt-6 border-t border-gray-100  ">
      <button
        type="button"
        className="px-4 py-2 text-sm font-medium text-gray-700    bg-white   border border-gray-300   rounded-lg hover:bg-gray-50  "
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
      >
        {isSubmitting ? 'Save Changes' : 'submit'}
      </button>
    </div>
  )
}

export default FormActions