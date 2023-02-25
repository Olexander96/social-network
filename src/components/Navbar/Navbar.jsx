import React from 'react';
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friend from './Friend/Friend';

const setActive = link => link.isActive ? n.activeLink : ""; // якщо лінк активний то додає клас activeLink


const Navbar = (props) => {
    // const popularFriends = props.state.map(friend => <Friend name={friend.name} avatar={friend.avatar}/>)

    return (
        <div className={n.block}>
            <nav className={n.nav}>
                <div className={n.item}>
                    <NavLink to="/profile" className= {setActive}>Profile</NavLink>
                </div>
                <div className={n.item}>
                    <NavLink to="/dialogs" className = {setActive}>Dialogs</NavLink>
                </div>
                <div className={n.item}>
                    <NavLink to="/news" className = {setActive}>News</NavLink>
                </div>
                <div className={n.item}>
                    <NavLink to="/music" className = {setActive}>Music</NavLink>
                </div>
                <div className={n.item}>
                    <NavLink to="/settings" className = {setActive}>Settings</NavLink>
                </div>
            </nav>
            <ul className={n.friendsList}>
                <Friend name={props.state[1].name} avatar={props.state[1].avatar}/>
                <Friend name={props.state[2].name} avatar={props.state[2].avatar}/>
                <Friend name={props.state[3].name} avatar={props.state[3].avatar}/>
            </ul>
        </div>
        
    )
}

export default Navbar;
