import React from 'react';
import './post-form.css';

const Error = ({ isTouched, isValid }) => {
  return (isTouched && !isValid)
    ? (<div className="error"> You cannot publish an empty post.</div>)
    : (<noscript />);
}

export const PostForm = (props) => {
  const isUpdate = props.editId === props.id;
  const label = isUpdate?'Update':'Publish';
  return (
    <div className='post-form'>

      <div className='form-elements'>
        <label>{label} a post</label>
        <textarea
          placeholder="What's on your mind?"
          rows="4"
          cols="50"
          value={props.content}
          onChange={(e) => props.onContentChange(e.target.value)}
        />
        <Error {...props} />
      </div>
      <div className='form-elements'>
        <button
          disabled={props.isTouched && !props.isValid}
          className="btn primary"
          onClick={() => props.onSaveContent(props.id, props.content)}>
          {label}
          </button>
      </div>
    </div>
  );
}