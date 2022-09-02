import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      {/*avatar_in_post*/}
      <img src='https://cdn-icons-png.flaticon.com/256/4825/4825015.png'></img>
      {props.message}
      <div>
        <div className={s.likes}>
          likes {props.likesCount}
        </div>
      </div>
    </div>
  );
}

export default Post;