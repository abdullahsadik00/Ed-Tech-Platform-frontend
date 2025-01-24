import React, { useState } from 'react';
import teacherWelcomeImg from '../assets/img/teacherWelcomeImg.png';
import DropdownMenu from '../components/uiElements/DropdownMenu';
import { report } from '../assets/data/report';
import useTagInput from '../components/core/customHook/useTagInput';
import TagField from '../components/uiElements/TagField';

const Grades = () => {
  const MAX_TAGS = 5;

  //Retrieve all the returned items from the hook

  const { tags, handleAddTag, handleRemoveTag } = useTagInput(MAX_TAGS); // pass the maximum tags

  // Handle form submission

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting and reloading the page
    console.log(tags);
  };

  return (
    <div className="w-full mx-auto bg-white rounded-lg shadow-lg">
      <form>
        <TagField
          tags={tags}
          addTag={handleAddTag}
          removeTag={handleRemoveTag}
          maxTags={MAX_TAGS}
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white outline-none border-none"
        >
          Submit Tags
        </button>
      </form>
    </div>
  );
};

export default Grades;
