import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import StoreContext from './StoreContext';
const root = ReactDOM.createRoot(document.getElementById('root'));

const rerenderEntireTree = (state) => {
    root.render(
        <StoreContext.Provider value={store}>
            <App/>
        </StoreContext.Provider>
    );
}

rerenderEntireTree( store.getState() );
store.subscribe( () => {
    let state = store.getState();
    rerenderEntireTree( state );
}) 
reportWebVitals();
