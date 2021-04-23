import React, { useState,useEffect } from 'react';
import './Dashboard.scss';
import logo from '../../assets/background.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTimes, faRedoAlt } from '@fortawesome/free-solid-svg-icons';
import { Redirect } from "react-router-dom";
import {declineAuth} from '../../redux/features';
import { useSelector, useDispatch } from 'react-redux';

function Dashboard() {
    const auth = useSelector((state) => state.featureSlice.isAuthenticated);

    useEffect(() => {
        if(!auth){
            setRedirect('/')
        }
    }, [])

    let dispatch = useDispatch();
    const [redirect,setRedirect] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    if(redirect!=null)
        return <Redirect to={redirect}></Redirect>
    return (
        <div className="dashboard-wrap">
            <div className="left-wrap">
                <div className="header-wrap">
                    <div className="lead-items">
                        <img className="lead-logo" src={logo} alt="" srcset="" />
                        <span onClick={()=>{
                            dispatch(declineAuth())
                            localStorage.removeItem('token');
                        }}>My Profile</span>
                    </div>
                    <div className="trail-item">

                    </div>
                </div>
                <div className="tab-wrap noselect">
                    <span onClick={() => { setActiveTab(0) }} className={activeTab === 0 ? "tab-active" : ""}>Matches</span>
                    <span onClick={() => { setActiveTab(1) }} className={activeTab === 1 ? "tab-active" : ""}>Messages</span>
                </div>


            </div>
            <div className="right-wrap">
                <div className="person-wrap">
                    <img className="person-img" src={logo} alt="" srcSet="" />
                    <div className="person-actions">
                        <div className="icon-holder">
                            <FontAwesomeIcon color="#FFC609" size="2x" icon={faRedoAlt} />
                        </div>
                        <div className="icon-holder">
                            <FontAwesomeIcon color="red" size="2x" icon={faHeart} />
                        </div>
                        <div className="icon-holder">
                            <FontAwesomeIcon color="lightgreen" size="2x" icon={faTimes} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
