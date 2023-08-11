import React, { useEffect, useRef, useState } from 'react';
import './signin.css';
import { Link } from 'react-router-dom';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { auth, db, fbFunctions } from '../../firebase/firebaseinit';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const initialUser = {
    email: '',
    password: '',
}

const SignIn = () => {
    const form = useRef();

    ////////////////////////////////////////TEST
    const test = auth.currentUser;
    useEffect(() => {
        console.log('test', test)
        if (!test) return;
        console.log('user', test)
        test.providerData?.forEach((profile) => {
            console.log(profile)
        })

    }, [test])
    ////////////////////////////////////////TEST

    const [loading, setLoading] = useState(false);

    // user
    const [user, setUser] = useState({ ...initialUser });
    const [isLogin, setIsLogin] = useState(false);

    const onChangeUser = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    const onClickSignin = async () => {
        try {
            setLoading(true);
            if (isLogin) {
                await signInWithEmailAndPassword(auth, user.email, user.password)
                    .then((userCredential) => {
                        // Signed in
                        console.log(userCredential)
                        const user = userCredential.user;
                        console.log(user)
                    });
            }
        } catch (e) {
            // const msg = e.code.split('auth/')[1].split('-').join(' ');
            // console.log(msg)
            setLoading(false);
            switch (e.code) {
                case "auth/user-not-found" || "auth/wrong-password":
                    return alert("이메일 혹은 비밀번호가 일치하지 않습니다.");
                case "auth/email-already-in-use":
                    return alert("이미 사용 중인 이메일입니다.");
                case "auth/weak-password":
                    return alert("비밀번호는 6글자 이상이어야 합니다.");
                case "auth/network-request-failed":
                    return alert("네트워크 연결에 실패 하였습니다.");
                case "auth/invalid-email":
                    return alert("잘못된 이메일 형식입니다.");
                case "auth/internal-error":
                    return alert("잘못된 요청입니다.");
                default:
                    return alert("로그인에 실패 하였습니다.");
            }
        }
    };

    return (
        <section className='signin section'>
            <h1 className="section__title"><Link to='/'>Youjin</Link></h1>
            <div className="signin__container container grid">
                <div className="signin__content">
                    <div className='signin__greeting'>
                        <h3 className="signin__title">Sign in Youjin.</h3>
                        <p>Welcome!</p>
                    </div>
                    <div className='signin__line'></div>
                    <div ref={form} className="signin__form">
                        <div className="signin__form-div">
                            <label className='signin__form-tag'>Mail</label>
                            <input
                                type="email"
                                name='email'
                                className='signin__form-input'
                                placeholder='Insert your email'
                                value={user.email}
                                onChange={onChangeUser}
                            />
                        </div>
                        <div className="signin__form-div">
                            <label className='signin__form-tag'>Password</label>
                            <input
                                type="password"
                                name='password'
                                className='signin__form-input'
                                placeholder='Insert your password'
                                value={user.password}
                                onChange={onChangeUser}
                            />
                        </div>
                        <div className='signin__send'>
                            <button
                                disabled={loading || !user.email.trim() || !user.password.trim()}
                                onClick={onClickSignin}
                            >
                                Sign In
                            </button>
                        </div>
                    </div>
                </div>
                <div className='signin__callout'>
                    New to Youjin? <Link to='/signup'>Create an account.</Link>
                </div>
            </div>
        </section>
    )
}

export default SignIn