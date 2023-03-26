const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

const initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
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
        default: return state 
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page});
export const setTotalUsersCountAC = (totalUsers) => ({type: SET_TOTAL_USERS_COUNT, totalUsers});
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;