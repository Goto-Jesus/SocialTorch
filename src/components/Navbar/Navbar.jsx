import * as React from "react";

import { NavLink } from "react-router-dom";
import s from './Navbar.module.css';
import FriendsList from "./Sidebar/FriendsList";

const setActive = ({ isActive }) => isActive ? s.activeLink : s.item;


//------------------------------------------------------------------------------------------------------
const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={setActive}>Profile</NavLink></div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={setActive}>Message</NavLink></div>
            <div className={s.item}>
                <NavLink to="/news" className={setActive}>News</NavLink></div>
            <div className={s.item}>
                <NavLink to="/music" className={setActive}>Music</NavLink></div>
            <div className={s.item}>
                <NavLink to="/settings" className={setActive}>Settings</NavLink></div>
            <br/>
            <div className={s.item}>
                <NavLink to="/friends" className={setActive}>Friends</NavLink>
                <FriendsList friends={props.sidebar.friends}/>
            </div>
        </nav>
    );
};


export default Navbar;