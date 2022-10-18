const ADD_POST = "ADD-POST";
const CURRENT_POST = "CURRENT-POST";

const profileReducer = (state, action) => {
    function _addPost() {
        let post = {
            id: state.posts.length + 1,
            message: state.currentPost,
            likesCount: 0
        };
        let checkLength = post.message.toString().length > 0;
        if (checkLength) {
            state.posts.push(post);
        }
        state.currentPost = "";
    }
    function _currentPost(getChar) {
        state.currentPost = getChar;
    }

    switch (action.type) {
        case ADD_POST:
            _addPost();
            return state;
        case CURRENT_POST:
            _currentPost(action.getChar)
            return state;
        default:
            return state;
    }
}

// Екшены что вызываются
export const addPostActionCreator = () => ({ type: ADD_POST })
export const currentPostActionCreator = (char) => ({ type: CURRENT_POST, getChar: char})

export default profileReducer;