import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post.jsx'

const MyPosts = (props) => {
  
  let postElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);
  let newPostElement = React.createRef();

  const onWritesPost = () =>{
    let uiText = newPostElement.current.value;
    props.writesPost(uiText);
  };

  const onAddPost = () => {
    props.addPost();
  };

  return (
    <div className={s.content}>
      <div>
        <h3>My posts</h3>
        <div>
          <textarea ref={newPostElement} 
          placeholder="your news..." 
          onChange={onWritesPost} 
          value={props.currentPost}/>
        </div>
        <div>
          <button onClick={onAddPost}>Send</button>
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;