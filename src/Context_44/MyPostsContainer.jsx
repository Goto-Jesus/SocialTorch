import React from 'react';
import MyContext from '../../../Context_44/StoreContext';
import { addPostActionCreator, currentPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {
  return (
    <MyContext.Consumer>{
      (store) => {
        let state = store.getState();
        const sendWritesPost = (uiText) => {
          store.dispatch(currentPostActionCreator(uiText));
        };
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        return (
          <MyPosts
            writesPost={sendWritesPost}
            addPost={addPost}
            posts={state.profilePage.posts}
            currentPost={state.profilePage.currentPost}
          />
        )
      }
    }
    </MyContext.Consumer>
  )
}

export default MyPostsContainer;