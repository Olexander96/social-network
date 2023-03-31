import React from 'react';
import { NavLink } from 'react-router-dom';
import h from './Header.module.css';

const Header = (props) => {
    return (
        <header className={h.header}>
            <div className={h.container}>
                <img src='https://play-lh.googleusercontent.com/ahJtMe0vfOlAu1XJVQ6rcaGrQBgtrEZQefHy7SXB7jpijKhu1Kkox90XDuH8RmcBOXNn' alt='logo'/>
                {
                    props.isAuth ? <span>{props.login}</span> : <NavLink to={"/login"}>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;
