export const removeTagFromWcag = (wcagList, tagToRemove) => {
  return wcagList.map((wcagItem) => {
    if (wcagItem.ref_id === tagToRemove.wcagId) {
      const newTag = wcagItem.tags.filter(
        (tag, ndx) => ndx !== tagToRemove.tagNdx
      );
      return { ...wcagItem, tags: newTag };
    } else {
      return wcagItem;
    }
  });
};

export const addTagToWcag = (wcagList, tagToAdd) => {
  return wcagList.map((wcagItem) => {
    if (wcagItem.ref_id === tagToAdd.wcagId) {
      const newTag = [...wcagItem.tags, tagToAdd.tag];
      return { ...wcagItem, tags: newTag };
    } else {
      return wcagItem;
    }
  });
};
