import { profileAPI } from '../api/api'

const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

const initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 10},
        {id: 2, message: "It is my first post", likesCount: 15}
    ],
    newPostText: "",
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            let lastElemId = {...state}.posts[{...state}.posts.length - 1].id;
            const newPost = {
                id: lastElemId + 1, 
                message: action.post, 
                likesCount: 0
            }
            
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        // case UPDATE_NEW_POST_TEXT: 
        //     return {
        //         ...state,
        //         newPostText: action.text
        //     }
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS: 
            return {
                ...state,
                status: action.status
            }
        default: return state 
    }
}

export const addPostCreator = (newPost) => ({ type: ADD_POST, post: newPost });
// export const updateNewPostTextCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, text });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });

export const getUserProfile = (userId) => (dispatch) => {
        profileAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data));
        })
    }

export const getUserStatus = (userId) => (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
    }
export const updateUserStatus = (status) => (dispatch) => {
        profileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            } 
        })
    }

export default profileReducer;