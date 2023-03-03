import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateNewPostText, addMessage, updateMessages } from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderEntireTree = (state) => {
    root.render(
        <App state={ state } 
             addPost={ addPost }
             updateNewPostText = { updateNewPostText }
             addMessage = { addMessage }
             updateMessages = { updateMessages } />
    );
}