import React from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App (props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sidebar = { props.store.getState().sidebar }/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={ <Profile store = { props.store } />} />
                        <Route path="/dialogs/*" element={<DialogsContainer store = { props.store } />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
