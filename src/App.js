import React from 'react';
import './reset.css';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter} from "react-router-dom";
import {Route, Routes} from "react-router";



function App(props) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*" element={<Profile posts={props.posts}/>}/>
                        <Route path="/dialogs/*" element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;