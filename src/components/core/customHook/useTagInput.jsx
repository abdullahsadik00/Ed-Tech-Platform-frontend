import React, { useState } from 'react';

const useTagInput = (maxTags = 5) => {
  const [tags, setTags] = useState([]);

  const handleAddTag = (newTag) => {
    if (newTag && !tags.includes(newTag) && tags.length < maxTags) {
      setTags([...tags, newTag]);
    }
  };

  const handleRemoveTag = (tag) => {
    if (tag && tags.includes(tag)) {
      setTags(tags.filter((el) => el !== tag));
    }
  };

  return { tags, handleAddTag, handleRemoveTag };
};

export default useTagInput;
