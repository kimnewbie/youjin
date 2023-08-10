import React, { useRef } from 'react';
import './signin.css';

const SignIn = () => {
    const form = useRef();

    const onClickSignUp = (e) => {
        e.preventDefault();

    };

    return (
        <section className='signin section'>
            <h1 className="section__title">Youjin</h1>
            <div className="signin__container container grid">
                <div className="signin__content">
                    <div className='signin__greeting'>
                        <h3 className="signin__title">Sign in to Youjin</h3>
                        <p>Welcome!</p>
                    </div>
                    <div className='signin__line'></div>
                    <form ref={form} onSubmit={onClickSignUp} className="signin__form">
                        <div className="signin__form-div">
                            <label className='signin__form-tag'>Name</label>
                            <input
                                type="text"
                                name='name'
                                className='signin__form-input'
                                placeholder='Insert your name'
                            />
                        </div>
                        <div className="signin__form-div">
                            <label className='signin__form-tag'>Mail</label>
                            <input
                                type="email"
                                name='email'
                                className='signin__form-input'
                                placeholder='Insert your email'
                            />
                        </div>
                        <div className="signin__form-div">
                            <label className='signin__form-tag'>Password</label>
                            <input
                                type="password"
                                name='password'
                                className='signin__form-input'
                                placeholder='Insert your password'
                            />
                        </div>
                        <div className='signin__send'>
                            <button>Sign In</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SignIn