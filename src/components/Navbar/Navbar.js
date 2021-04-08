import React from 'react';
import './Navbar.scss';
import Button from '../Button/Button';
import { openModal } from '../../redux/features';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar() {

    let dispatch = useDispatch();

    function toggleModal() {
        dispatch(openModal());
    }

    return (
        <div className="navbar">
            <h1>faangSexual</h1>
            <Link to="/login">            <Button text={"Login"}></Button></Link>
        </div>
    )
}

export default Navbar
