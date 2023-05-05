import { profileAPI } from '../api/api';

const ADD_POST = "profile/ADD-POST";
const SET_USER_PROFILE = "profile/SET_USER_PROFILE";
const SET_STATUS = "profile/SET_STATUS";
const DELETE_POST = "profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profile/SAVE_PHOTO_SUCCESS";

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
        case DELETE_POST: 
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }
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
        case SAVE_PHOTO_SUCCESS: 
            return {
                ...state,
                profile: {
                    ...state.profile, 
                    photos: action.photos
                }
            }
        default: return state 
    }
}

export const addPostCreator = (newPost) => ({ type: ADD_POST, post: newPost });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const deletePostCreator = (id) => ({ type: DELETE_POST, id: id });
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos: photos });

export const getUserProfile = (userId) => async (dispatch) => {
        const response = await profileAPI.getProfile(userId);
        dispatch(setUserProfile(response));
    };

export const getUserStatus = (userId) => async (dispatch) => {
        const response = await profileAPI.getStatus(userId);
        dispatch(setStatus(response.data));
    };
export const updateUserStatus = (status) => async (dispatch) => {
        const response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        } 
    };

export const savePhoto = (file) => async (dispatch) => {
        const response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            debugger
           dispatch(savePhotoSuccess(response.data.data.photos));
        } 
    }


export default profileReducer;