let renderEntireTree = () =>{
    console.log("state chaged");    
};

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
            { id: 1, message: "hello", date: "14:20" },
            { id: 2, message: "how are you?", date: "14:21" },
            { id: 3, message: "ok nice", date: "14:24" },
            { id: 4, message: "goodbuy.", date: "14:30" }
        ],
        currentMessage:""
    },
    sidebar: {
        friends: [
            { id: 1, name: "Katya" },
            { id: 2, name: "Vadya" },
            { id: 3, name: "Max" }
        ]
    }
};

window.state = state;



export const addPost = () =>{
    let post = {
        id: state.profilePage.posts.length + 1,
        message: state.profilePage.writtenPost.currentText,
        likesCount: 0
    };
    state.profilePage.posts.push(post);
    state.profilePage.writtenPost.currentText="";
    renderEntireTree(state);
};



export const currentPost = (getChar) =>{
    state.profilePage.writtenPost.currentText=getChar;
    renderEntireTree(state);
}

export const addMessange = () =>{
    let date = new Date();
    let textMessage ={
        id: state.dialogsPage.messages.length+1,
        message: state.dialogsPage.currentMessage,
        date: `${date.getHours()}:${date.getMinutes()}`
    };
    state.dialogsPage.messages.push(textMessage);
    state.dialogsPage.currentMessage = "";
    renderEntireTree(state);
}

export const newMessage = (getChar) =>{
    state.dialogsPage.currentMessage = getChar;
    renderEntireTree(state);
}

export const subscribe = (observer) =>{// принимаем функцию с index.js
    renderEntireTree = observer;  // патерн observer - наблюдатель (как addEventLister, onClick...)
    // присваиваем существующей функции функционал с наблюдателя
}

export default state;
