import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { PostFeeds, PostForm, PostFeedback } from '../../components';

import './posts.page.css';
/**
 * Smart component
 */
export default inject(['store'])(observer(
  class Posts extends Component {
    componentDidMount() {
      this.props.store.PostStore.loadData();
    }
    render() {
      const { PostStore } = this.props.store;
      const { posts, totalPosts } = PostStore;

      return (
        <div className='post-page'>
          <PostForm
            {...PostStore.newPostData}
            editId={PostStore.editId}
            onContentChange={PostStore.onContentChange}
            onSaveContent={PostStore.addOrUpdate}
          />

          <PostFeeds
            list={posts}
            editId={PostStore.editId}
            loadMore={PostStore.loadData}
            hasMore={PostStore.hasMoreData}
            onEdit={PostStore.editPost}
            onDelete={PostStore.deletePost}
          />

          <PostFeedback
            loadedCount = {posts.length}
            totalCount = {totalPosts}
            isLoading = {PostStore.callInProgress}
          />

        </div>
      );
    }
  }
));