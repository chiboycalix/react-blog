import React from 'react';
import './ReadPost.scss';

 const ReadPost = () => {
  return (
    <div className="post-card">
      <div className="post-image">
        <img src="https://images.unsplash.com/photo-1556741533-f9cffe3ba641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" alt="post"/>
      </div>
      <div className="post-content">
        <div className="post-header">
          <h3>This is a very long title</h3>
        </div>
        <div className="post-description">
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.dummy text of the printing and text ever since the 1500s.dummy text of the printing andtext ever since the 1500s.dummy text of the printing and typesetting industry </p>
        </div>
        <div className="post-tags">
          <p>post tags</p>
        </div>
      </div>
    </div>
  )
}

export default ReadPost;