import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPosts 
      profilePage ={props.profilePage} 
      addPost={props.addPost} 
      currentPost={props.currentPost}
      />
    </div>
  );
}

export default Profile;