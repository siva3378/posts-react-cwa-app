import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'

export default inject(['store'])(observer(
  class Posts extends Component {
    render() {
      const { PostStore } = this.props.store;
      const currentPage = PostStore.currentPage;
      console.log('>>>', currentPage);
      return (
        <div>
          <button onClick={PostStore.nextPage}>Next</button>
          <p>Current Page = {currentPage}</p>
        </div>
      );
    }
  }
));