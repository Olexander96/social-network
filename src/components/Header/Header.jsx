import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src='https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn' alt='logo'/>
                {
                    props.isAuth 
                        ? <div> 
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
