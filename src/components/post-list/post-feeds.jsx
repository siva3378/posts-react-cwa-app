import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { PostList } from './post-list';
import './post.css';

export const PostFeeds = (props) => {
  const { loadMore, hasMore } = props;
  return (
    <div className='post-page-infinite-items'>
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        useWindow={false}
        loader={<div className="loader" key={0}>Loading ...</div>}
      >
        <PostList {...props} />
      </InfiniteScroll>
    </div>
  );
}