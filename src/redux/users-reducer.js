import { usersAPI } from '../api/api';
import { updateObjectInArray } from '../utils/object-helpers';

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = "users/UNFOLLOW";
const SET_USERS = "users/SET-USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "users/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "users/TOGGLE_IS_FOLLOWING_PROGRESS";

const initialState = {
    users: [],
    pageSize: 6,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    portionSize: 5
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, "id", action.userId, {followed: false})
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

export const getUsers = (currentPage, pageSize) => async (dispatch) => { // це кріейтор санки
    dispatch(setCurrentPage(currentPage))
    dispatch(toggleIsFetching(true));

    const response = await usersAPI.getUsers(currentPage, pageSize)
        
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setTotalUsersCount(response.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => { //для unfollowUser/ followUser загальна логіка
    dispatch(toggleIsFollowingProgress(true, userId));
    const response = await apiMethod(userId)

    if (response.resultCode === 0) { //якщо запит успішний то міняємо в стейті followed: false відповідному юсеру або навпаки
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingProgress(false, userId))
};

export const unfollowUser = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.unfollowUser, unfollow )
};

export const followUser = (userId) => (dispatch) => {
    followUnfollowFlow(dispatch, userId, usersAPI.followUser, follow )
};

export default usersReducer;