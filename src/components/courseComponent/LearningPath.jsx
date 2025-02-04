import { useState } from 'react';
import {
  DndContext,
  closestCenter,
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
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import ContentModal from './ContentModal';

function SortableItem({ item, onEdit, contentTypes }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="border rounded-lg p-4 mb-4 bg-white cursor-move touch-none"
      {...attributes}
      {...listeners}
    >
      <div className="flex items-start gap-4">
        <div className="bg-orange-100 p-2 rounded hover:scale-110 active:scale-90 transition-transform">
          {contentTypes.find((t) => t.type === item.type)?.icon || '📄'}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">{item.title}</h3>
            <span
              className={`text-sm ${
                item.status === 'Published'
                  ? 'text-green-600'
                  : 'text-yellow-600'
              }`}
            >
              {item.status}
            </span>
          </div>
          <div className="text-sm text-gray-600 mt-1">
            {item.chapters} Chapter • Updated {item.lastUpdated}
          </div>
          <p className="text-gray-600 mt-2">{item.description}</p>
        </div>
        <button
          onClick={() => onEdit(item)}
          className="text-blue-600 hover:scale-105 active:scale-95 transition-transform"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default function LearningPath() {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [editingItem, setEditingItem] = useState(null);
  const [showInsertPoint, setShowInsertPoint] = useState(null);
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
      setPathItems(
        pathItems.map((item) =>
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

  const contentTypes = [
    { type: 'stage', icon: '📑', label: 'Stage' },
    { type: 'course', icon: '📚', label: 'Course' },
    { type: 'page', icon: '📝', label: 'Page' },
    { type: 'quiz', icon: '❓', label: 'Quiz' },
    { type: 'upload', icon: '⬆️', label: 'Upload' },
    { type: 'library', icon: '📚', label: 'Library', highlight: true },
  ];

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-pink-100 p-2 rounded hover:scale-110 active:scale-90 transition-transform">
            📚
          </span>
          <h1 className="text-2xl font-bold">Learning Path</h1>
        </div>
        <h2 className="text-xl font-bold mb-2">
          General Knowledge & Methodology - Layout & Spacing
        </h2>
        <p className="text-gray-600 mb-4">
          Combining good layout design and spacing design in Figma will result
          in a more professional, structured, and aesthetic design, ensuring a
          better user experience when using a product or website.
        </p>
        <div className="flex gap-4 text-sm text-gray-600">
          <span>Prototyping</span>
          <span>Not Urgent</span>
          <span>•</span>
          <span>Estimated 1 Weeks</span>
          <span>•</span>
          <span>English</span>
        </div>
      </div>

      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <span>List priority Path</span>
            <div className="flex items-center gap-2">
              <span>Set By</span>
              <select className="border rounded p-1">
                <option>Sequencial</option>
              </select>
            </div>
          </div>
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
                      onClick={() =>
                        handleOpenModal('library', null, index + 1)
                      }
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

        <button
          onClick={() => handleOpenModal('library')}
          className="mt-4 w-full border-2 border-dashed rounded-lg p-4 text-gray-500 hover:bg-gray-50 transition-colors"
        >
          + Add new content
        </button>
      </div>

      <div className="border-t pt-8">
        <h3 className="text-gray-500 mb-4">CONTENT</h3>
        <div className="grid grid-cols-6 gap-4">
          {contentTypes.map(({ type, icon, label, highlight }) => (
            <button
              key={type}
              onClick={() => handleOpenModal(type)}
              className={`flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-50 transition-all hover:-translate-y-1 ${
                highlight ? 'text-blue-600' : ''
              }`}
            >
              <span className="text-2xl">{icon}</span>
              <span className="text-sm">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {showModal && (
        <ContentModal
          type={modalType}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
          initialData={editingItem}
        />
      )}
    </div>
  );
}
