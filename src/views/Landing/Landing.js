import React from 'react'
import './Landing.scss';
import Navbar from '../../components/Navbar/Navbar';
import Button from '../../components/Button/Button';
import {Link} from 'react-router-dom';


function Landing() {


    return (
        <>
            <div className="header-wrapper">
                <div className="header">
                </div>
                <div className="main-wrap">
                    <div className="hero-block">
                        <div className="hero-wrap">
                            <span className="hero-text">Even a hash map has pair.</span>
                            <Link to="/register"><Button type="gradient" text={"Create an Account"}></Button></Link>
                        </div>
                    </div>
                </div>
                <Navbar />
            </div>
        </>
    )
}


export default Landing;
