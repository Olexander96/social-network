
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';


const rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <App state={ store.getState() } 
             addPost={ store.addPost.bind(store) }
             updateNewPostText = { store.updateNewPostText.bind(store) }
             addMessage = { store.addMessage.bind(store) }
             updateMessages = { store.updateMessages.bind(store) } />
    );
}
rerenderEntireTree( store.getState());
store.subscribe( rerenderEntireTree ) 
reportWebVitals();
