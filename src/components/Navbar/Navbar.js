import React from 'react';
import './Navbar.scss';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

function Navbar() {




    return (
        <div className="navbar">
            <h1>faangSexual</h1>
            <Link to="/login">            <Button text={"Login"}></Button></Link>
        </div>
    )
}

export default Navbar
