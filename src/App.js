import React, { Suspense } from 'react';
import './reset.css';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import { BrowserRouter } from "react-router-dom";
import {Route, Routes} from 'react-router';
import UsersContainer from './components/Users/UsersContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './components/hoc/withRouter';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import Login from './components/Login/Login';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); //буде лінива загрузка обертаємо Suspense
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));//буде лінива загрузка обертаємо Suspense

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
                            <Route path="/profile/:userId?" element={ 
                                <Suspense fallback={ <Preloader/> }>
                                    <ProfileContainer/>
                                </Suspense>
                            } /> 
                            <Route path="/dialogs/*" element={ 
                                <Suspense fallback={ <Preloader/> }>
                                    <DialogsContainer/>
                                </Suspense>
                             } />
                            <Route path="/users/*" element={ <UsersContainer/> } />
                            <Route path="/login/*" element={ <Login/> } /> 
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
