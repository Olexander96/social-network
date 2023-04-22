import {authAPI} from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = "SET_USER_DATA";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
            return {
                ...state,
                ...action.data
            }
        default: return state
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth}});

export const getAuthUserData = () => (dispatch) => { //кріейтор санки
    authAPI.authMe().then(data => {
        if (data.resultCode === 0) {
            const {id, email, login} = data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }   
    }) 
};

export const login = (email, password, rememberMe) => (dispatch) => { //кріейтор санки

    authAPI.login(email, password, rememberMe).then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData()) //коли ми выдправили дані на сервер то знову проуємо залогінити себе
        } else {
            const errorMessage = data.messages.length > 0 ? data.messages[0] : "Some error";
            dispatch(stopSubmit("login", {_error: errorMessage})) // коли resultCode буде 1 (не успішно залогінились) то покаже помилку
        }
    }) 
};

export const logout = () => (dispatch) => { 
    authAPI.logout().then(data => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData(null, null, null, false))//коли вилогінилися то зачищаємо дані свої
        }   
    }) 
}

export default authReducer;