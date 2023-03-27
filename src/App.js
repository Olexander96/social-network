import React from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

function App (props) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={ <ProfileContainer />} />
                        <Route path="/dialogs/*" element={<DialogsContainer/>} />
                        <Route path="/users/*" element={<UsersContainer/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
