import React, { useState } from 'react';

const TagField = ({ tags, addTag, removeTag, maxTags }) => {
  const [userInput, setUserInput] = useState('');

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (
        userInput.trim() !== '' &&
        userInput.length <= 12 &&
        tags.length < maxTags
      ) {
        addTag(userInput);
        setUserInput('');
      }
    }
  };

  return (
    <div className="flex flex-col w-[300px] md:w-[400px]">
      <input
        type="text"
        name="keyword_tag"
        placeholder={
          tags.length < maxTags
            ? 'Add a tag'
            : `You can only add ${maxTags} tags`
        }
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        value={userInput}
        disabled={tags.length === maxTags}
        className="outline-none px-3    "
      />
      <div className="flex flex-row flex-wrap gap-3">
        {tags.map((tag, idx) => {
          return (
            <span
              key={idx}
              className="px-2 py-1 bg-richblack-300/10 rounded-lg mt-2 hover:bg-richblack-300/15 tracking-wider font-medium text-xs text-left font-lato text-[#616161]"
            >
              {tag}
              <button
                className="ml-2 hover:text-richblack-200"
                onClick={() => removeTag(tag)}
                title={`Remove ${tag}`}
              >
                &times;
              </button>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TagField;
