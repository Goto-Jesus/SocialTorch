import { reRenger } from "../renrer";

// Data.
let state = {
    profilePage: {
        posts: [
            { id: 1, message: "Привет єто мой первый пост.", likesCount: 10 },
            { id: 2, message: "Типа посты", likesCount: 5 },
            { id: 3, message: "Да это круто!", likesCount: 34 },
            { id: 4, message: "Поставте мне лайк", likesCount: 99 }
        ],
        writtenPost:
            {currentText: ""}
    },
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Katya" },
            { id: 2, name: "Vadya" },
            { id: 3, name: "Max" },
            { id: 4, name: "Kolya." }
        ],
        messages: [
            { id: 1, message: "hello" },
            { id: 2, message: "how are you?" },
            { id: 3, message: "ok nice" },
            { id: 4, message: "i like you" },
            { id: 5, message: "goodbuy." }
        ]
    },
    sidebar: {
        friends: [
            { id: 1, name: "Katya" },
            { id: 2, name: "Vadya" },
            { id: 3, name: "Max" }
        ]
    }
};

export let addPost = (postMessange) =>{
    let post = {
        id: state.profilePage.posts.length + 1,
        message: postMessange,
        likesCount: 0
    };
    state.profilePage.posts.push(post);
    reRenger(state,addPost,currentPost);// соблюдаем чистую функцию
};



export let currentPost = (getChar) =>{
    state.profilePage.writtenPost.currentText=getChar;
    reRenger(state,addPost,currentPost);// соблюдаем чистую функцию
}

export default state;
