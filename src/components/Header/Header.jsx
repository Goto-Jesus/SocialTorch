import React from 'react';
import s from './Header.module.css';

const Header = () => { 
    return(
    <header className={s.header}>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/480px-Android_O_Preview_Logo.png'></img>
    </header>
    );
}

export default Header;