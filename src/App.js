import React from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Profile from './components/Profile/Profile';
import { BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App (props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={ <Profile />} />
                        <Route path="/dialogs/*" element={<DialogsContainer/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
