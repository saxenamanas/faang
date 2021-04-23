import React, { useState,useEffect } from 'react'
import '../Register/Register.scss';
import { useFormik } from 'formik';
import { openLoading, closeLoading, confirmAuth } from '../../redux/features';
import { store } from 'react-notifications-component';
import { useDispatch } from 'react-redux';
import axiosConfig from '../../axios.config';
import notif from '../../components/Notifications/notifications';
import { Redirect } from "react-router-dom";

function Login() {        
    const [redirect, setRedirect] = useState(null);

    useEffect(() => {
        let k = localStorage.getItem('token');
        if(k!=null)
            setRedirect('/home')
    }, []);


    let dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        onSubmit: values => {
            dispatch(openLoading());
            axiosConfig.post('/loginUser', values).then((rep) => {
                localStorage.setItem('token', rep.data.token);
                dispatch(closeLoading());
                dispatch(confirmAuth())
                setRedirect('/home');
            }).catch(e => {
                console.log(e);
                dispatch(closeLoading());
                store.addNotification({
                    ...notif,
                    message: 'Email Id or Password is wrong.',
                    title: 'Error!',
                    type: 'danger',
                });
            });
        },
    });

    if (redirect != null)
        return <Redirect to='/home' />
    return (
        <div className="main-wrapper">
            <div className="left-image">
                {/* <span className="hero-tag">Login</span> */}
            </div>

            <div className="right-content">

                <div className="form-container">
                    <div className="form-heading">Login</div>

                    <form className="form-main w-100" onSubmit={formik.handleSubmit}>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                        />

                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                        />

                        <div className="submit-btn">
                            <button className="btn-grad" type="submit">Login</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default Login
