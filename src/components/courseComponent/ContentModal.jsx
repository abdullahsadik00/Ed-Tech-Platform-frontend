import { motion } from 'framer-motion';
// import StageForm from './content-types/stage-form';
// import CourseForm from './course-form';
// import PageForm from './page-form';
// import QuizForm from './quiz-form';
// import UploadForm from './upload-form';
// import SelectLibraryModal from './select-library-modal';
import StageForm from './StageForm';
import CourseForm from './CourseForm';
import PageForm from './PageForm';
import QuizForm from './QuizForm';
import UploadForm from './UploadForm';
import SelectLibraryModal from './SelectLibraryModal';

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

export default function ContentModal({ type, onClose, onSubmit, initialData }) {
  const renderForm = () => {
    switch (type) {
      case 'stage':
        return (
          <StageForm
            onSubmit={onSubmit}
            onCancel={onClose}
            initialData={initialData}
          />
        );
      case 'course':
        return (
          <CourseForm
            onSubmit={onSubmit}
            onCancel={onClose}
            initialData={initialData}
          />
        );
      case 'page':
        return (
          <PageForm
            onSubmit={onSubmit}
            onCancel={onClose}
            initialData={initialData}
          />
        );
      case 'quiz':
        return (
          <QuizForm
            onSubmit={onSubmit}
            onCancel={onClose}
            initialData={initialData}
          />
        );
      case 'upload':
        return (
          <UploadForm
            onSubmit={onSubmit}
            onCancel={onClose}
            initialData={initialData}
          />
        );
      case 'library':
        return <SelectLibraryModal onClose={onClose} onAdd={onSubmit} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="bg-white rounded-lg w-[600px] max-h-[80vh] overflow-auto"
      >
        {renderForm()}
      </motion.div>
    </motion.div>
  );
}
