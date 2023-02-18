import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const posts = [
    {id: 1, message: "Hi, how are you?", likesCount: 10},
    {id: 2, message: "It is my first post", likesCount: 15}
];

const dialogs = [
    {id: 1, name: "Dimon"},
    {id: 2, name: "Ehor"},
    {id: 3, name: "Olya"},
    {id: 4, name: "Vitalik"},
    {id: 5, name: "Sasha"},
    {id: 6, name: "Alyona"}
];

const messages = [
    {id: 1, message: "Hello"},
    {id: 2, message: "How are you?"},
    {id: 3, message: "How are your it-kanasutra?"}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>
);

reportWebVitals();
