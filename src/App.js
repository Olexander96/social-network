import React from 'react';
import './reset.css';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from 'react-router';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './components/hoc/withRouter';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp() //кріекйтор санки
    }

    render () {
        if (!this.props.initialized) {
            return <Preloader/>
        } 
        return (
            <BrowserRouter>
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <NavbarContainer />
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/profile/:userId?" element={ <ProfileContainer />} /> 
                            <Route path="/dialogs/*" element={<DialogsContainer/>} />
                            <Route path="/users/*" element={<UsersContainer/>} />
                            <Route path="/login/*" element={<Login/>} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);
