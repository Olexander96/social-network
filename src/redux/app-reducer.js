import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS= "INITIALIZED_SUCCESS";

const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: 
            return {
                ...state,
                initialized: true
            }
        default: return state
    }
}

export const initializedSuccess = () => ({ type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => { //кріейтор санки
    const promise = dispatch(getAuthUserData());

    Promise.all([promise]) //коли є результат чи залогінений користувач то ми можемо запустити компоненту App
    .then(() => {
        dispatch(initializedSuccess())
    })
};


export default appReducer;