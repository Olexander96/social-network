import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import NavbarContainer from '../Navbar/NavbarContainer';
import Logo from '../../assets/images/header/custom-logo.PNG'

const Header = (props) => {

    return (
        <header className={styles.header}>
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
