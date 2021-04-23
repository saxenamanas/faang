import React, { useState, useEffect } from 'react';
import './Register.scss';
import { ErrorMessage, useFormik } from 'formik';
import ImageUploader from "react-images-upload";
import axiosConfig from '../../axios.config';
import { openLoading, closeLoading } from '../../redux/features';
import { store } from 'react-notifications-component';
import { useDispatch } from 'react-redux'
import * as Yup from 'yup';



function Register(props) {
    const [pictures, setPictures] = useState([]);

    let dispatch = useDispatch();

    const SignupSchema = Yup.object().shape({
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Password is required'),
        bio: Yup.string().required('Bio is Required')
    });

    const { handleChange, errors, handleSubmit, values } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            bio: ''
        },
        validationSchema: SignupSchema,
        onSubmit: values => {
            dispatch(openLoading())
            let obj = {
                ...values,
                name: values.firstName + values.lastName
            }
            axiosConfig.post('/createUser', obj).then((rep) => {
                dispatch(closeLoading());
                store.addNotification({
                    title: "Success!",
                    message: "Your Account was created Successfully!",
                    type: "success",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: true
                    }
                })
            }).catch(e => {
                dispatch(closeLoading());
                store.addNotification({
                    title: "Error!",
                    message: "Something went wrong!",
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animate__animated", "animate__fadeIn"],
                    animationOut: ["animate__animated", "animate__fadeOut"],
                    dismiss: {
                        duration: 5000,
                        onScreen: false
                    }
                })
                console.log(e);
            })
            console.log(values);
        },
    });




    const onDrop = picture => {
        setPictures([...pictures, picture]);
    };
    return (
        <div className="main-wrapper">
            <div className="left-image">
                {/* <span className="hero-tag">Login</span> */}
            </div>

            <div className="right-content">

                <div className="form-container">
                    <div className="form-heading">Register</div>
                    <ImageUploader
                        singleImage={true}
                        withPreview={true}
                        {...props}
                        withIcon={true}
                        onChange={onDrop}
                        imgExtension={[".jpg", ".gif", ".png"]}
                        maxFileSize={5242880}
                    />
                    <form className="form-main w-100" onSubmit={handleSubmit}>
                        <div className="normal-flex w-100">
                            <input
                                className="w-40"
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                onChange={handleChange}
                                value={values.firstName}
                            />

                            <input
                                className="w-40"
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                onChange={handleChange}
                                value={values.lastName}
                            />
                        </div>

                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            value={values.email}
                        />

                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={handleChange}
                            value={values.password}
                        />

                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            value={values.confirmPassword}
                        />

                        <textarea placeholder="Bio" name="bio" id="bio" cols="30" rows="10" onChange={handleChange}
                            value={values.bio}></textarea>

                        <div className="submit-btn">
                            <button className="btn-grad" type="submit">Submit</button>
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default Register;
