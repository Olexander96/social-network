import { usersAPI } from '../api/api';

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        // case "FAKE": return {...state, fake: state.fake + 1}
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users]
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.followingInProgress 
                    ? [...state.followingInProgress, action.userId] //якщо в нас прийде true то цей id буде в масиві і кнопка буде disabled
                    : state.followingInProgress.filter(id => id !== action.userId) //якщо в нас прийде false то воно викине цей id з масива і кнопка розблокується
            }
        default: return state 
    }
}

export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCount = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT, totalUsers});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsFollowingProgress = (followingInProgress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId});

export const getUsers = (currentPage, pageSize) => { // це кріейтор санки
    return (dispatch) => {  // це санка
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => { //axios 
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
        })
    }
}

export const unfollowUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));

        usersAPI.unfollowUser(userId).then(data => {
            if (data.resultCode === 0) { //якщо запит успішний то міняємо в стейті followed: false відповідному юсеру
                dispatch(unfollow(userId));
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));

        usersAPI.followUser(userId).then(data => {
            if (data.resultCode === 0) { //навпаки
                dispatch(follow(userId))
            }
            dispatch(toggleIsFollowingProgress(false, userId))
        })
    }
}


export default usersReducer;