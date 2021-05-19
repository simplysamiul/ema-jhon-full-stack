import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import Menubar from '../Menubar/Menubar';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="image can't be found !!" />
            <Menubar/>
        </div>
    );
};

export default Header;