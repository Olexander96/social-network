import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux"; 
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";
import settingsReducer from "./settings-reducer";
import newsReducer from "./news-reducer";

let reducers = combineReducers({
    app: appReducer,
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    settings: settingsReducer,
    news: newsReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //для redux devtools

let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware))); // applyMiddleware для застосування промыжуточного рівня ThunkMiddleware
window.__store__ = store;
export default store;
