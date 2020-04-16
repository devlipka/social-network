import React from 'react';
import s from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi8wMzagJzlAhWGxosKHTISBGoQjRx6BAgBEAQ&url=https%3A%2F%2Fwww.designevo.com%2F&psig=AOvVaw1e_GG9Cb7sfv9nGZLjtB5x&ust=1571151240866121" alt="" />
            <div className={s.loginBlock}>
                {props.isAuth ?  props.login 
                   : <NavLink to='/login'>Login</NavLink>
                }
            </div>
        </header>
    )
}

export default Header;