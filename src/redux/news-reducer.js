import { newsAPI } from "../api/api";

const GET_NEWS = "users/GET_NEWS";

const initialState = {
    newsList: [],
};

const newsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_NEWS:
            return {
                ...state,
                newsList: action.articles
            }
        default: return state 
    }
}

const getNews = (articles) => ({type: GET_NEWS, articles: articles});

export const getNewsThunkCreator = () => async (dispatch)=> { 
    const response = await newsAPI.getCurrentNews();
    if (response.status === 'ok') { 
        dispatch(getNews(response.articles))
    }
};

export default newsReducer;