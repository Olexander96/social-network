import { authAPI, securityAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = "auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCCESS";

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: 
        case GET_CAPTCHA_URL_SUCCESS: 
            return {
                ...state,
                ...action.data
            }
        default: return state
    }
}

//action creators
export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth}});
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, data: {captchaUrl}});

//thunk creators
export const getAuthUserData = () => async (dispatch) => { //кріейтор санки
    const response = await authAPI.authMe();
    
    if (response.resultCode === 0) {
        const {id, email, login} = response.data;
        dispatch(setAuthUserData(id, email, login, true));
    }   
};

export const getCaptchaUrl = () => async (dispatch) => { //беремо captcha з сервера
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.data.url;

    dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export const login = (email, password, rememberMe, captcha) => async (dispatch) => { //кріейтор санки
    const response = await authAPI.login(email, password, rememberMe, captcha);

    if (response.resultCode === 0) {
        dispatch(getAuthUserData()) //коли ми відправили дані на сервер то знову проуємо залогінити себе
    } else {
        if (response.resultCode === 10) { //помилка коли багато запитув, потрібна catpcha
            dispatch(getCaptchaUrl()) //записуємо captcha для валідації
        }
        const errorMessage = response.messages.length > 0 ? response.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: errorMessage})) // коли resultCode буде 1 (не успішно залогінились) то покаже помилку
    }
};

export const logout = () => async (dispatch) => { 
    const response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(getAuthUserData(null, null, null, false));//коли вилогінилися то зачищаємо дані свої
    }   
};


export default authReducer;