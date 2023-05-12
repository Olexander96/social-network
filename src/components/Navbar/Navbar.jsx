import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import {ReactComponent as ProfileIcon} from '../../assets/images/header/profile-navbar.svg';
import {ReactComponent as DialogsIcon} from '../../assets/images/header/dialogs-navbar.svg';
import {ReactComponent as NewsIcon} from '../../assets/images/header/news-navbar.svg';


const setActive = link => link.isActive ? styles.activeLink : ""; // якщо лінк активний то додає клас activeLink

const Navbar = (props) => {

    return (
            <nav className={styles.nav}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <NavLink to="/profile" className = {setActive}>
                            <ProfileIcon className={styles.icon}/>
                            <span>Profile</span>
                        </NavLink> 
                    </li> 
                    <li className={styles.item}>
                        <NavLink to="/dialogs" className = {setActive}>
                            <DialogsIcon className={styles.icon}/>
                            <span>Dialogs</span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/news" className = {setActive}>
                            <NewsIcon className={styles.icon}/>
                            <span>News</span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/music" className = {setActive}>
                            <span>Music</span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/users" className = {setActive}>
                            <span>Users</span>
                        </NavLink>
                    </li>
                    <li className={styles.item}>
                        <NavLink to="/settings" className = {setActive}>
                            <span>Settings</span>
                        </NavLink>
                    </li>
                </ul>
            </nav> 
    )
}

export default Navbar;
