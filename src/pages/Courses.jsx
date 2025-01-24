import React, { useState } from 'react';
import Tag from '../components/courseComponent/Tag';
import CourseHeader from '../components/courseComponent/CourseHeader';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';
import { Search, Plus, Filter } from 'lucide-react';
import CourseHeaderThumbnail from '../components/courseComponent/CourseHeaderThumbnail';
const categories = [
  'Prototyping',
  'UI/UX',
  'Design',
  'Development',
  'Business',
  'Marketing',
  'Personal Development',
];

const levels = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED', 'EXPERT'];
const languages = ['English', 'Hindi', 'Spanish', 'French', 'German'];
const Courses = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedThumbnail, setSelectedThumbnail] = useState(
    'https://picsum.photos/800/300'
  );
  const [previewVideo, setPreviewVideo] = useState('');
  const [price, setPrice] = useState('0');
  const [currency, setCurrency] = useState('INR');
  const [level, setLevel] = useState('BEGINNER');
  const [language, setLanguage] = useState('English');
  const [duration, setDuration] = useState('0');
  const [totalLectures, setTotalLectures] = useState('0');
  const [isPrivate, setIsPrivate] = useState(false);
  const [allowGuestPreview, setAllowGuestPreview] = useState(true);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [showContentLibrary, setShowContentLibrary] = useState(false);
  const [showThumbnailImage, setShowThumbnailImage] = useState(true);
  function checkStringType(input) {
    console.log('Function called with string', input);
    const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\/\S*)?$/;
    const hexPattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;

    if (urlPattern.test(input)) {
      setShowThumbnailImage(true);
    } else {
      setShowThumbnailImage(false);
    }
  }

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleNewStage = (type) => {
    console.log('New stage:', type);
  };
  const [showThumbnailSelector, setShowThumbnailSelector] = useState(false);
  const handleThumbnailSelect = (value) => {
    checkStringType(value);
    console.log('showThumbnailImage', showThumbnailImage);
    setSelectedThumbnail(value);
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-primary-200 pb-20">
      <CourseHeader
        currentStep={1}
        totalSteps={3}
        onNext={() => console.log('Next')}
        onBack={() => console.log('Back')}
      />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl min-w-lg  mx-auto bg-white rounded-md"
      >
        <div className="animate-fade-in ">
          <motion.div
            className="relative mb-5"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {showThumbnailImage ? (
              <img
                src={selectedThumbnail}
                alt="Learning Path Overview"
                className="w-full h-48 object-cover rounded-t-xl custom-shadow "
              />
            ) : (
              <div
                className="w-full h-48 object-cover rounded-t-xl custom-shadow"
                style={{ backgroundColor: selectedThumbnail }}
              ></div>
            )}

            <button
              onClick={() => setShowThumbnailSelector(true)}
              className="absolute top-4 right-4 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg 
                         text-sm font-medium hover:bg-white transition-colors shadow-sm"
            >
              Update thumbnail
            </button>
            <div className="absolute w-14 h-14 bg-primary-200 left-4 -bottom-7 rounded-md flex items-center justify-center">
              <User size={38} className="text-white" />
            </div>
          </motion.div>
          <motion.div
            className="p-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <textarea
              type="text"
              placeholder="What is the Learning Path"
              className="text-3xl font-semibold pl-0 w-full border-none focus:outline-none focus:ring-0 active:outline-none placeholder:text-gray-400"
              rows={1}
            />

            <div className="space-y-4 mt-2">
              {/* <div className="space-y-3 flex items-center">
                <label className="font-medium w-56">Category</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((tag) => (
                    <Tag
                      key={tag}
                      label={tag}
                      active={selectedTags.includes(tag)}
                      onClick={() => toggleTag(tag)}
                    />
                  ))}
                </div>
              </div> */}
              <div className="space-y-3 flex flex-col sm:flex-row sm:items-center">
                <label className="font-medium w-full sm:w-56 mb-2 sm:mb-0">
                  Category
                </label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((tag) => (
                    <Tag
                      key={tag}
                      label={tag}
                      active={selectedTags.includes(tag)}
                      onClick={() => toggleTag(tag)}
                    />
                  ))}
                </div>
              </div>

              {/* <div className=" flex items-center">
                <label className="font-medium sm:w-56 w-72 ">
                  Estimate duration1
                </label>

                <div className="flex w-full items-center gap-2 border border-border rounded-lg px-4 py-2">
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Duration"
                    className="w-full p-0 bg-transparent border-none focus:outline-none focus:ring-0"
                  />
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-transparent  w-32 p-0 sm:px-9 px-3 border-none focus:outline-none focus:ring-0"
                  >
                    <option value="HOUR">Hours</option>
                    <option value="DAY">Days</option>
                    <option value="WEEK">Weeks</option>
                    <option value="MONTH">Month</option>
                  </select>
                </div>
              </div> */}
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="font-medium w-full sm:w-56 mb-2 sm:mb-0">
                  Estimate duration
                </label>
                <div className="flex w-full items-center gap-2 border border-border rounded-lg px-4 py-2">
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Duration"
                    className="w-full p-0 bg-transparent border-none focus:outline-none focus:ring-0"
                  />
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="bg-transparent w-28 p-0 px-3 border-none focus:outline-none focus:ring-0"
                  >
                    <option value="HOUR">Hours</option>
                    <option value="DAY">Days</option>
                    <option value="WEEK">Weeks</option>
                    <option value="MONTH">Month</option>
                  </select>
                </div>
              </div>

              <div className=" mt-8">
                <div className="space-y-3 flex items-center">
                  <label className="font-medium sm:w-56 w-72 ">Price</label>

                  <div className="flex w-full items-center gap-2 border border-border rounded-lg px-4 py-2">
                    <input
                      type="number"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder="Price"
                      className="w-full p-0 bg-transparent border-none focus:outline-none focus:ring-0"
                    />
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="bg-transparent w-28 p-0 px-3 border-none focus:outline-none focus:ring-0"
                    >
                      <option value="INR">INR</option>
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className=" mt-8">
                <div className="space-y-3 flex items-center">
                  <label className="font-medium sm:w-56 w-72 ">Level</label>

                  <div className="flex w-full items-center gap-2 border border-border rounded-lg px-4 py-2">
                    <select
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      className="bg-transparent p-0 border-none focus:outline-none focus:ring-0 w-full"
                    >
                      {levels.map((l) => (
                        <option key={l} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className=" mt-8">
                <div className="space-y-3 flex items-center">
                  <label className="font-medium sm:w-56 w-72 ">Language</label>

                  <div className="flex w-full items-center gap-2 border border-border rounded-lg px-4 py-2">
                    <select
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      className="bg-transparent p-0 px-3 border-none focus:outline-none focus:ring-0 w-full"
                    >
                      {languages.map((l) => (
                        <option key={l} value={l}>
                          {l}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center">
                <label className="font-medium w-full sm:w-56 mb-2 sm:mb-0">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Let your learner know a little about the learning path..."
                  className="w-full h-32 px-4 py-3 rounded-lg border border-border focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>
              <div className="text-right text-sm !mt-1">
                {description.length}/450
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  class="px-4 py-2 text-sm font-medium text-white bg-blue-600 dark:bg-blue-500 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.main>
      {showThumbnailSelector && (
        <CourseHeaderThumbnail
          onSelect={handleThumbnailSelect}
          onClose={() => setShowThumbnailSelector(false)}
        />
      )}
    </div>
  );
};

export default Courses;
// import React, { useState } from 'react';
// // import { Button } from '@/components/ui/button';
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogHeader,
// //   DialogTitle,
// // } from '@/components/ui/dialog';
// // import { Input } from '@/components/ui/input';
// import {
//   Book,
//   FileText,
//   Upload,
//   Library,
//   GraduationCap,
//   BookOpen,
// } from 'lucide-react';
// const LearningPath = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedContent, setSelectedContent] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const contentTypes = [
//     {
//       id: 'stage',
//       icon: <GraduationCap className="h-6 w-6" />,
//       title: 'Stage',
//       description: 'Create learning stages for structured progress',
//     },
//     {
//       id: 'course',
//       icon: <Book className="h-6 w-6" />,
//       title: 'Course',
//       description: 'Create and publish educational content',
//     },
//     {
//       id: 'page',
//       icon: <FileText className="h-6 w-6" />,
//       title: 'Page',
//       description: 'Create standalone pages containing educational content',
//     },
//     {
//       id: 'quiz',
//       icon: <BookOpen className="h-6 w-6" />,
//       title: 'Quiz',
//       description: 'Create assessments to evaluate learners',
//     },
//     {
//       id: 'upload',
//       icon: <Upload className="h-6 w-6" />,
//       title: 'Upload',
//       description: 'Upload your educational materials',
//     },
//     {
//       id: 'library',
//       icon: <Library className="h-6 w-6" />,
//       title: 'Library',
//       description: 'Access your content library',
//     },
//   ];
//   const handleContentSelect = (content) => {
//     if (!selectedContent.find((item) => item.id === content.id)) {
//       setSelectedContent([...selectedContent, content]);
//     }
//   };
//   const handleRemoveContent = (contentId) => {
//     setSelectedContent(selectedContent.filter((item) => item.id !== contentId));
//   };
//   return (
//     <div className="p-6 max-w-7xl mx-auto">
//       <div className="mb-8">
//         <h1 className="text-2xl font-bold mb-2">
//           General Knowledge & Methodology - Layout & Spacing
//         </h1>
//         <p className="text-gray-600">
//           Combining good layout design and spacing design in Figma will result
//           in a more professional, structured, and aesthetic design, ensuring a
//           better user experience when using a product or website.
//         </p>

//         <div className="flex items-center gap-4 mt-4">
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-gray-500">Prototyping</span>
//             <span className="text-sm bg-gray-100 px-2 py-1 rounded">
//               Not Urgent
//             </span>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-gray-500">Estimated 1 Week</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <span className="text-sm text-gray-500">English</span>
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
//         {contentTypes.map((content) => (
//           <button
//             key={content.id}
//             onClick={() => handleContentSelect(content)}
//             className="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-gray-50 transition-colors"
//           >
//             <div className="mb-2 text-primary">{content.icon}</div>
//             <span className="text-sm font-medium">{content.title}</span>
//           </button>
//         ))}
//       </div>
//       <div open={isModalOpen} onOpenChange={setIsModalOpen}>
//         <div className="sm:max-w-[600px]">
//           <div>
//             <h2>Select from Library</h2>
//           </div>
//           <div className="space-y-4">
//             <input
//               placeholder="Search..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full"
//             />
//             <div className="flex justify-between items-center">
//               <div className="space-y-2">
//                 {selectedContent.map((content) => (
//                   <div
//                     key={content.id}
//                     className="flex items-center gap-2 bg-gray-100 p-2 rounded"
//                   >
//                     {content.icon}
//                     <span>{content.title}</span>
//                     <button
//                       onClick={() => handleRemoveContent(content.id)}
//                       className="ml-auto text-gray-500 hover:text-gray-700"
//                     >
//                       ×
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="flex justify-end gap-2">
//               <button variant="outline" onClick={() => setIsModalOpen(false)}>
//                 Cancel
//               </button>
//               <button onClick={() => setIsModalOpen(false)}>Add</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default LearningPath;
