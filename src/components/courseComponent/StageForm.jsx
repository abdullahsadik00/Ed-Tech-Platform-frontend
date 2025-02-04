import { motion } from 'framer-motion';

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function StageForm({ onSubmit, initialData, onCancel }) {
  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="p-6"
    >
      <motion.h2 variants={itemVariants} className="text-xl font-bold mb-4">
        {initialData ? 'Edit Stage' : 'Add Stage'}
      </motion.h2>
      <form onSubmit={onSubmit} className="space-y-4">
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium mb-1">Stage Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-lg"
            defaultValue={initialData?.name}
            required
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            className="w-full p-2 border rounded-lg"
            rows="4"
            defaultValue={initialData?.description}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <label className="block text-sm font-medium mb-1">
            Duration (weeks)
          </label>
          <input
            type="number"
            className="w-full p-2 border rounded-lg"
            defaultValue={initialData?.duration || 1}
            min="1"
          />
        </motion.div>
        <motion.div variants={itemVariants} className="flex justify-end gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border rounded-lg hover:bg-gray-50"
          >
            Cancel
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {initialData ? 'Update Stage' : 'Create Stage'}
          </motion.button>
        </motion.div>
      </form>
    </motion.div>
  );
}
