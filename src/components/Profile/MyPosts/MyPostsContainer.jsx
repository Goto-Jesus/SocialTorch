import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, currentPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

let mapState = (state)=>{
  return{
    posts:state.profilePage.posts,
    currentPost:state.profilePage.currentPost
  }
}
let mapDispatch = (dispatch) =>{
  return{
    addPost:()=>{
      dispatch(addPostActionCreator());
    },
    writesPost:(uiText) => {
      dispatch(currentPostActionCreator(uiText));
    }
  }
}

const MyPostsContainer = connect(mapState,mapDispatch)(MyPosts);

export default MyPostsContainer;