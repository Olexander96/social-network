import {authAPI} from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = "auth/SET_USER_DATA";

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

export const getAuthUserData = () => async (dispatch) => { //кріейтор санки
    const response = await authAPI.authMe();
    
    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }   
};

export const login = (email, password, rememberMe) => async (dispatch) => { //кріейтор санки
    const response = await authAPI.login(email, password, rememberMe);

    if (response.resultCode === 0) {
        dispatch(getAuthUserData()) //коли ми відправили дані на сервер то знову проуємо залогінити себе
    } else {
        const errorMessage = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: errorMessage})) // коли resultCode буде 1 (не успішно залогінились) то покаже помилку
    }
};

export const logout = () => async (dispatch) => { 
    const response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(getAuthUserData(null, null, null, false));//коли вилогінилися то зачищаємо дані свої
    }   
}

export default authReducer;