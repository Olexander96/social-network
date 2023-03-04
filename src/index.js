
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost, updateNewPostText, addMessage, updateMessages } from './redux/state';
import { subscribe } from './redux/state';


const rerenderEntireTree = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    
    root.render(
        <App state={ state } 
             addPost={ addPost }
             updateNewPostText = { updateNewPostText }
             addMessage = { addMessage }
             updateMessages = { updateMessages } />
    );
}
rerenderEntireTree(state);
subscribe(rerenderEntireTree)
reportWebVitals();
