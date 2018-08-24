import React from 'react';
import { PostItem } from './post-list-item';

export const PostList = ({ list, editId, onEdit, onUpdate, onDelete }) => {
  const inEditMode = editId !== null;
  const otherProps = { editId, onEdit, onUpdate, onDelete };
  return (
    <ul className={`post-list edit-mode-${inEditMode}`}>
      {list.map((item) => <PostItem key={item.id} item={item} {...otherProps} />)}
    </ul>
  );
}
