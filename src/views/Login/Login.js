import React from 'react'
import '../Register/Register.scss';
import { useFormik } from 'formik';

function Login() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',

        },
        onSubmit: values => {
            console.log(values);
        },
    });


    return (
        <div className="main-wrapper">
            <div className="left-image">
                {/* <span className="hero-tag">Login</span> */}
            </div>

            <div className="right-content">

                <div className="form-container">
                    <div className="form-heading">Register</div>

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
