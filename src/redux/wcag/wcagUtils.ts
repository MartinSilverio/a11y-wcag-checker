export const removeTagFromWcag = (wcagList: any, tagToRemove: any) => {
  return wcagList.map((wcagItem: any) => {
    if (wcagItem.ref_id === tagToRemove.wcagId) {
      const newTag = wcagItem.tags.filter(
        (tag: any, ndx: any) => ndx !== tagToRemove.tagNdx
      );
      return { ...wcagItem, tags: newTag };
    } else {
      return wcagItem;
    }
  });
};

export const addTagToWcag = (wcagList: any, tagToAdd: any) => {
  return wcagList.map((wcagItem: any) => {
    if (wcagItem.ref_id === tagToAdd.wcagId) {
      const newTag = [...wcagItem.tags, tagToAdd.tag];
      return { ...wcagItem, tags: newTag };
    } else {
      return wcagItem;
    }
  });
};
