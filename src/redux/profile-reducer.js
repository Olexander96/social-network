const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 10},
        {id: 2, message: "It is my first post", likesCount: 15}
    ],
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let lastElemId = {...state}.posts[{...state}.posts.length - 1].id;
            const newPost = {
                id: lastElemId + 1, 
                message: {...state}.newPostText, 
                likesCount: 0
            }
            
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }
        default: return state 
    }
}

export const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT, 
        newText: text
    }
}

export default profileReducer;