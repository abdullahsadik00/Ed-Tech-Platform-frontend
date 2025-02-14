import { motion } from 'framer-motion';
import React, { useState } from 'react';
import {
  GraduationCap,
  Book,
  FileText,
  Upload,
  Library,
  BookOpen,
  Languages,
  ClipboardType,
  Clock,
} from 'lucide-react';
import {
  closestCenter,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import SortableItem from './SortableItem';
import ContentModal from './ContentModal';
const CourseStep2 = ({ formData, setFormData, handleBack, handleNext }) => {
  const contentTypes = [
    {
      id: 'stage',
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Stage',
      description: 'Create learning stages for structured progress',
    },
    {
      id: 'course',
      icon: <Book className="h-6 w-6" />,
      title: 'Course',
      description: 'Create and publish educational content',
    },
    {
      id: 'page',
      icon: <FileText className="h-6 w-6" />,
      title: 'Page',
      description: 'Create standalone pages containing educational content',
    },
    {
      id: 'quiz',
      icon: <BookOpen className="h-6 w-6" />,
      title: 'Quiz',
      description: 'Create assessments to evaluate learners',
    },
    {
      id: 'upload',
      icon: <Upload className="h-6 w-6" />,
      title: 'Upload',
      description: 'Upload your educational materials',
    },
    {
      id: 'library',
      icon: <Library className="h-6 w-6" />,
      title: 'Library',
      description: 'Access your content library',
    },
  ];
  const [pathItems, setPathItems] = useState([
    {
      id: 1,
      title: 'Consistantbillity Margin and padding',
      type: 'page',
      chapters: 10,
      lastUpdated: '28 Aug 2022',
      status: 'Published',
      description: 'Enhance button accessibility for improved user interface.',
    },
    {
      id: 2,
      title: 'Good Space to design element',
      type: 'page',
      chapters: 8,
      lastUpdated: '28 Aug 2022',
      status: 'Published',
      description: 'Ample Space for Crafting Stylish Element Cards',
    },
  ]);
  const [editingItem, setEditingItem] = useState(null);
  const [showInsertPoint, setShowInsertPoint] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setPathItems((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  };
  const handleOpenModal = (type, item = null, insertIndex = null) => {
    setModalType(type);
    setEditingItem(item);
    setShowModal(true);
    if (insertIndex !== null) {
      setShowInsertPoint(insertIndex);
    }
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setModalType(null);
    setEditingItem(null);
    setShowInsertPoint(null);
  };
  const handleSubmit = (formData) => {
    if (editingItem) {
      setPathItems((items) =>
        items.map((item) =>
          item.id === editingItem.id ? { ...item, ...formData } : item
        )
      );
    } else {
      const newItem = {
        id: Date.now(),
        type: modalType,
        lastUpdated: new Date().toLocaleDateString(),
        status: 'Draft',
        ...formData,
      };
      if (showInsertPoint !== null) {
        const newItems = [...pathItems];
        newItems.splice(showInsertPoint, 0, newItem);
        setPathItems(newItems);
      } else {
        setPathItems([...pathItems, newItem]);
      }
    }
    handleCloseModal();
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl min-w-lg mx-auto bg-white rounded-md dark:bg-zinc-950 p-6"
    >
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-2">
          {formData.title || 'Course Content'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {formData.description || 'Add content to your learning path'}
        </p>

        <div className="flex items-center gap-5 mt-4 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <ClipboardType size={20} />
            {formData.selectedTags.length > 0 &&
              formData.selectedTags.map((tag) => {
                return (
                  <div className="flex items-center gap-1">
                    <span className="text-sm bg-gray-100 px-2.5 py-1 rounded-lg dark:bg-gray-700">
                      {/* {formData.selectedTags[0]} */}
                      {tag}
                    </span>
                    {/* <span className="text-sm bg-gray-100 px-2 py-1 rounded dark:bg-gray-700">
                    Not Urgent
                  </span> */}
                  </div>
                );
              })}
          </div>

          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span className="text-sm text-gray-500">
              Estimated {formData.duration} {formData.currency.toLowerCase()}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Languages size={20} />
            <span className="text-sm text-gray-500">{formData.language}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
        {contentTypes.map(({ id, icon, title, highlight }) => (
          <button
            key={id}
            onClick={() => handleOpenModal(id)}
            className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors dark:border-gray-700 dark:hover:bg-gray-800"
          >
            <div className="mb-2 text-primary">{icon}</div>
            <span className="text-sm font-medium">{title}</span>
          </button>
        ))}
      </div>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={pathItems.map((item) => item.id)}
          strategy={verticalListSortingStrategy}
        >
          {pathItems.map((item, index) => (
            <div key={item.id}>
              {/* Insert point above */}

              <div className="relative h-8 group">
                <button
                  className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-1 group-hover:h-8 bg-blue-100 rounded-md flex items-center justify-center opacity-0 hover:opacity-100 transition-all"
                  onClick={() => handleOpenModal('library', null, index)}
                >
                  <span className="opacity-0 group-hover:opacity-100 text-blue-600">
                    + Add content here
                  </span>
                </button>
              </div>
              <SortableItem
                item={item}
                onEdit={(item) => handleOpenModal(item.type, item)}
                contentTypes={contentTypes}
              />

              {/* Insert point below last item */}
              {index === pathItems.length - 1 && (
                <div className="relative h-8 group">
                  <button
                    className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-1 group-hover:h-8 bg-blue-100 rounded-md flex items-center justify-center opacity-0 hover:opacity-100 transition-all"
                    onClick={() => handleOpenModal('library', null, index + 1)}
                  >
                    <span className="opacity-0 group-hover:opacity-100 text-blue-600">
                      + Add content here
                    </span>
                  </button>
                </div>
              )}
            </div>
          ))}
        </SortableContext>
      </DndContext>

      <div className="mt-8 flex justify-between">
        <button
          onClick={handleBack}
          className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
        >
          Continue
        </button>
      </div>
      {showModal && (
        <ContentModal
          type={modalType}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
          initialData={editingItem}
        />
      )}
    </motion.main>
  );
};

export default CourseStep2;
