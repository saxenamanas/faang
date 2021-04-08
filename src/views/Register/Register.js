import React, { useState } from 'react';
import './Register.scss';
import { useFormik } from 'formik';
import ImageUploader from "react-images-upload";




function Register(props) {
    const [pictures, setPictures] = useState([]);

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            bio: ''
        },
        onSubmit: values => {
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
                    <form className="form-main w-100" onSubmit={formik.handleSubmit}>
                        <div className="normal-flex w-100">
                            <input
                                className="w-40"
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                onChange={formik.handleChange}
                                value={formik.values.firstName}
                            />

                            <input
                                className="w-40"
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                            />
                        </div>

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

                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="confirmPassword"
                            placeholder="Confirm Password"
                            onChange={formik.handleChange}
                            value={formik.values.confirmPassword}
                        />

                        <textarea placeholder="Bio" name="bio" id="bio" cols="30" rows="10" onChange={formik.handleChange}
                            value={formik.values.bio}></textarea>

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
