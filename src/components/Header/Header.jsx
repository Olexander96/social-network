import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import NavbarContainer from '../Navbar/NavbarContainer';
import Logo from '../../assets/images/header/custom-logo.PNG';
import classNames from 'classnames';

const Header = (props) => {

    return (
        <header className={classNames(styles.header, {[styles.headerDark]: props.themeType === 'DARK'})}>
            <div className={styles.container}>
                <img src={ Logo } alt='logo'/>
                <NavbarContainer/>
                {
                    props.isAuth 
                        ? <div className={styles.loginBlock}> 
                            <span>{ props.login }</span>
                            <NavLink to={"/profile"}>
                                <button onClick={ props.logout }>Logout</button> 
                            </NavLink>
                          </div>
                        : <NavLink to={"/login"}>
                            <button>Login</button>
                          </NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
