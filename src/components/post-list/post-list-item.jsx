import React from 'react';
import { FaTrashAlt, FaPencilAlt } from 'react-icons/fa';

export const PostItem = ({ item, editId, onEdit, onDelete }) => {
  const classNames = `post-item ${editId === item.id ? 'editing' : ''}`;
  return <li className={classNames}>
    <p>{item.content}</p>
    <div className="actions">
    <FaPencilAlt title="edit" onClick={() => onEdit(item)}/>
    <FaTrashAlt title="delete" onClick={() => onDelete(item)}/>
    </div>
  </li>
}