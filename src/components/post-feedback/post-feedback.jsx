import React from 'react';
import './post-feedback.css';

export const PostFeedback = ({
  loadedCount,
  totalCount,
  isLoading
}) => (
    <p className='post-feedback'>
      <span className='info'>Showing {loadedCount} out of {totalCount}</span>
      { isLoading && <span className='loading'>Loading...</span>}
    </p>
  );