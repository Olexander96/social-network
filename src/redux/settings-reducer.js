const CHANGE_APP_THEME = "CHANGE_APP_THEME";

const initialState = {
    themeType: "LIGHT"
};

const settingsReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_APP_THEME: 
        return {
            ...state,
            themeType: action.themeType
        }
        default: return state
    }
};

export const changeThemeCreator = (currentTheme) => {
    return {type: CHANGE_APP_THEME, themeType: currentTheme}
}

export default settingsReducer;