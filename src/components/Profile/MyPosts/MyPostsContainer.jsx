import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, currentPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

// const MyPostsContainer = (props) => {

//   let state = props.store.getState();

//   const sendWritesPost = (uiText) => {
//     props.store.dispatch(currentPostActionCreator(uiText));
//   };

//   const addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   return (
//     <MyPosts
//       writesPost={sendWritesPost}
//       addPost={addPost}
//       posts={state.profilePage.posts}
//       currentPost={state.profilePage.currentPost}
//     />
//   )
// }

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