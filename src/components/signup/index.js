import React, { useRef } from 'react';
import './signup.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const form = useRef();

    const onClickSignUp = (e) => {
        e.preventDefault();

    };

    return (
        <section className='signup section'>
            <Link to='/'><h1 className="section__title">Youjin</h1></Link>
            <div className="signup__container container grid">
                <div className="signup__content">
                    <div className='signup__greeting'>
                        <h3 className="signup__title">Create an account.</h3>
                        <p>It's easy to register</p>
                    </div>
                    <div className='signup__line'></div>
                    <form ref={form} onSubmit={onClickSignUp} className="signup__form">
                        <div className="signup__form-div">
                            <label className='signup__form-tag'>Name</label>
                            <input
                                type="text"
                                name='name'
                                className='signup__form-input'
                                placeholder='Insert your name'
                            />
                        </div>
                        <div className="signup__form-div">
                            <label className='signup__form-tag'>Mail</label>
                            <input
                                type="email"
                                name='email'
                                className='signup__form-input'
                                placeholder='Insert your email'
                            />
                        </div>
                        <div className="signup__form-div">
                            <label className='signup__form-tag'>Password</label>
                            <input
                                type="password"
                                name='password'
                                className='signup__form-input'
                                placeholder='Insert your password'
                            />
                        </div>
                        <div className="signup__form-div">
                            <label className='signup__form-tag'>Confirm Password</label>
                            <input
                                type="password"
                                name='confirm-password'
                                className='signup__form-input'
                                placeholder='Confirm your password'
                            />
                        </div>
                        <div className='signup__send'>
                            <button>Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignUp