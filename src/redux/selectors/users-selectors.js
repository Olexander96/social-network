import { createSelector } from "reselect";
// export const getUsersList = (state) => {
//     return state.usersPage.users.filter(user => true) 
// };
//проблема селекторів!!!
//якщо навіть повернеться той самий список юзерів то всеодно filter повнтаэ новий масив 
//а значить в mapStateToProps прийде новий масив ікомпонента перемалюється 

const getUsersListSelector = (state) => {
    return state.usersPage.users
};
export const getUsersList = createSelector(getUsersListSelector, (users) => {
    return users
})

// аби було у так - return users.filter(u => true) відбувалося б порівняння з тим масивом який 
// дає getUsersListSelector, і якщо він не змінюється то ми б не викликали getUsersList
// повторно, юзери б брались з масиву який був наданий перед цим (умовний кеш)
//також в складний селектор можна закинуть інші прості селектори і для кожного була б така сама логіка
// тобто якщо результат виконання складного селектору не відрізнявся від того що йому передав 
//простий селектор то компонента б не перемальовувалась

export const getPageSize = (state) => {
    return state.usersPage.pageSize
};

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
};

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
};

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
};

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
};

export const getPortionSize = (state) => {
    return state.usersPage.portionSize
};

export const getThemeValue = (state) => {
    return state.settings.themeType
};