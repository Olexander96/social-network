import React, { Suspense } from 'react';
import './reset.css';
import styles from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
//import NavbarContainer from './components/Navbar/NavbarContainer';
//import { BrowserRouter } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import {Route, Routes} from 'react-router';
import UsersContainer from './components/Users/UsersContainer';
import { Navigate } from 'react-router';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from './components/hoc/withRouter';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import Login from './components/Login/Login';
import classNames from 'classnames';
import Settings from './components/Settings/Settings';
import NewsContainer from './components/News/News';

const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer')); //буде лінива загрузка обертаємо Suspense
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));//буде лінива загрузка обертаємо Suspense

class App extends React.Component {

    catchAllUnhandledErrors() {
        console.log("Some error")//доробити
    };

    componentDidMount() {
        this.props.initializeApp() //кріекйтор санки
        window.addEventListener('unhandledrejections', this.catchAllUnhandledErrors)
    };

    componentWillUnmount() {
        window.removeEventListener('unhandledrejections', () => {})
    };

    render () {
        if (!this.props.initialized) {
            return <Preloader className = {styles.appPreloader}/>
        } 
        return (
            <HashRouter>
                <div className={styles.appWrapper}>
                    <HeaderContainer/>
                    <div className= { classNames(styles.appWrapperContent, {[styles.appWrapperContentDarkTheme]: this.props.themeType === "DARK"})  }>
                        <Routes>
                            <Route path="/" element={<Navigate to="/profile" />} />
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
                            <Route path="/news/*" element={ <NewsContainer/> } />
                            <Route path="/users/*" element={ <UsersContainer/> } />
                            <Route path="/login/*" element={ <Login/> } /> 
                            <Route path="/settings/*" element={ <Settings/> } /> 
                            <Route path="*" element={ <div className={styles.notFound}>THIS PAGE IS UNDER DEVELOPMENT!</div>} /> 
                        </Routes>
                    </div>
                </div>
            </HashRouter>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        themeType: state.settings.themeType
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);
