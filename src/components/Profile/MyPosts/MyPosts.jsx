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
  let newParagraf = React.createRef();
  
  let isWritingText;
  if(isWritingText){
    
  }

  const writingText = () =>{
    isWritingText = true;
    let currentText = newPostElement.current.value;
    props.currentPost(currentText);
    newPostElement.current.value = props.profilePage.writtenPost.currentText;
    document.getElementById("actualText").innerHTML = props.profilePage.writtenPost.currentText;
    isWritingText = false;
  };

  const addPost = () => {
    let text = props.profilePage.writtenPost.currentText;;// принимаем текст с поля
    let textLength = text.toString().length;
    if(textLength>0){
      props.addPost(text);//передаем текс в функцию BLL
    }
    newPostElement.current.value = "";// зануляем текст с поля
  };

  return (
    <div className={s.content}>
      <div>
        <h3>My posts</h3>
        <div>
          <p id="actualText">hello</p>
          {/* <textarea id="new-post" placeholder="your news..."></textarea> {/старый метод/} */}
          <textarea ref={newPostElement} placeholder="your news..." onKeyUp={writingText}></textarea>
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