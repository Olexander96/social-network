import React from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";

function App (props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar state={ props.state.dialogsPage.dialogs}/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={<Profile state={ props.state.profilePage }/>}/>
                        <Route path="/dialogs/*" element={<Dialogs state={ props.state.dialogsPage }/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
