import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post.jsx'

const MyPosts = (props) => {
  
  // let likes = 25;
  // let postData = [
  //   {id:1, message:"Привет єто мой первый пост.", likesCount: 10},
  //   {id:2, message:"Типа посты", likesCount: 5},
  //   {id:3, message:"Да это круто!", likesCount: 34},
  //   {id:4, message:"Поставте мне лайк", likesCount: 99}
  // ]

  let postElements = props.profilePage.posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

  // const addPost = ()=> { // старый метод
  //   let text = document.getElementById("new-post").value;
  //   alert(text);
  // };

  let newPostElement = React.createRef();
  
  let isWritingText;

  const writingText = () =>{
    isWritingText = true;
    let uiText = newPostElement.current.value;
    props.currentPost(uiText);
    let bllText = props.profilePage.writtenPost.currentText;
    document.getElementById("actualText").textContent = bllText;
    isWritingText = false;
  };

  const addPost = () => {
    let bllText = props.profilePage.writtenPost.currentText;
    let checkLength = bllText.toString().length>0;
    if(checkLength){
      props.addPost();//передаем текс в функцию BLL
    }
  };

  return (
    <div className={s.content}>
      <div>
        <h3>My posts</h3>
        <div>
          <p id="actualText">hello</p>
          {/* <textarea id="new-post" placeholder="your news..."></textarea> {/старый метод/} */}
          <textarea ref={newPostElement} 
          placeholder="your news..." 
          onChange={writingText} 
          value={props.profilePage.writtenPost.currentText}/>
        </div>
        <div>
          <button onClick={addPost}>Send</button>
          {/* postAlert вызываем без скобок ибо () так она вызовется сразу при запуске страницы */}
        </div>
      </div>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  );
}

export default MyPosts;