import React, { useEffect, useRef, useState } from 'react';
import './signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { auth, db, firebaseInstance } from '../../firebase/firebaseinit';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const initialUser = {
    name: '',
    email: '',
    password: '',
    rePassword: '',
}

const SignUp = () => {
    const form = useRef();
    const navigate = useNavigate();
    const usersCollectionRef = collection(db, "users");

    const [user, setUser] = useState({ ...initialUser });
    const [isDupleChecked, setIsDupleChecked] = useState(true);

    const onChangeUser = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    // 이메일 중복확인
    const onClickDupleCheck = async (e) => {
        const userRef = doc(db, "users", user.email);
        const userSnap = await getDoc(userRef)
        console.log(userRef)
        console.log(userSnap)
        // const { docs } = await getDocs(usersCollectionRef);
        // console.log(docs)
        // console.log(e)
        setIsDupleChecked(false);
        const q = query(collection(db, "users"));
        console.log(q)

        const querySnapshot = await getDocs(q);
        console.log('querySnapshot', querySnapshot)
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().email);
            console.log('doc', doc)
        });
        console.log(querySnapshot.forEach((doc) => console.log(doc.data().email === user.email)))
        console.log(querySnapshot.find((doc) => doc.data().email === user.email))
    }

    // 나중에 사용할 코드 -- 유저 정보 수정
    const onClickUpdateUser = async (id, age) => {
        const userDoc = doc(db, 'users', id)
        const newfields = { age: age + 1 }
        await updateDoc(userDoc, newfields)
    }

    // 나중에 사용할 코드 -- 유저 정보 삭제
    const onClickDeleteUser = async (id) => {
        const userDoc = doc(db, "users", id)
        await deleteDoc(userDoc)
    }

    // // 기존꺼 잠시 주석
    // const onClickSignUp = async (e) => {
    //     e.preventDefault();
    //     if (!user.name || !user.email || !user.password || !user.rePassword) {
    //         return alert('빈칸이 들어갈 수 없습니다')
    //     }
    //     // 아이디 중복 검사

    //     // 비밀 번호 검사 

    //     // 저장
    //     try {
    //         await addDoc(usersCollectionRef, { name: user.name, email: user.email, password: user.password });
    //     } catch (e) {
    //         console.log(e)
    //         return alert('Ooops.. something wrong, try one more time');
    //     } finally {
    //         alert(`Congratulations, ${user.name}! Your account has been successfully created.`);
    //         return navigate('/signin');
    //     }
    // };

    const onClickSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, user.email, user.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                })
        } catch (e) {
            // const msg = e.code.split('auth/')[1].split('-').join(' ');
            // console.log(msg) 
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
    }

    return (
        <section className='signup section'>
            <h1 className="section__title"><Link to='/'>Youjin</Link></h1>
            <div className="signup__container container grid">
                <div className="signup__content">
                    <div className='signup__greeting'>
                        <h3 className="signup__title">Create an account.</h3>
                        <p>It's easy to register</p>
                    </div>
                    <div className='signup__line'></div>
                    <div ref={form} className="signup__form">
                        <div className="signup__form-div">
                            <label className='signup__form-tag'>Name</label>
                            <input
                                type="text"
                                name='name'
                                className='signup__form-input'
                                placeholder='Insert your name'
                                value={user.name}
                                onChange={onChangeUser}
                            />
                        </div>
                        <div className="signup__form-div">
                            <label className='signup__form-tag'>Mail</label>
                            <div>
                                <input
                                    type="email"
                                    name='email'
                                    className='signup__form-input'
                                    placeholder='Insert your email'
                                    value={user.email}
                                    onChange={onChangeUser}
                                />
                                <button onClick={onClickDupleCheck} className='duple__btn'>중복체크</button>
                            </div>
                        </div>
                        <p>Failed! Email is already in use</p>
                        <div className="signup__form-div">
                            <label className='signup__form-tag'>Password</label>
                            <input
                                type="password"
                                name='password'
                                className='signup__form-input'
                                placeholder='Insert your password'
                                value={user.password}
                                onChange={onChangeUser}
                            />
                        </div>
                        <div className="signup__form-div">
                            <label className='signup__form-tag'>Confirm Password</label>
                            <input
                                type="password"
                                name='rePassword'
                                className='signup__form-input'
                                placeholder='Confirm your password'
                                value={user.rePassword}
                                onChange={onChangeUser}
                            />
                        </div>
                        <p>Confirm Password does not match</p>
                        <div className='signup__send'>
                            <button
                                // disabled={isDupleChecked}
                                onClick={onClickSignUp}
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp