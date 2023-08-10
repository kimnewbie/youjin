import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    // Toggle Tab
    const onClickToggle = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id='qualification'>
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={`qualification__button ${toggleState === 1 ? "qualification__active" : ""} button--flex`} onClick={() => onClickToggle(1)}>
                        <i className="uil uil-briefcase qualification__icon">Experience</i>
                    </div>
                    <div className={`qualification__button ${toggleState === 2 ? "qualification__active" : ""} button--flex`} onClick={() => onClickToggle(2)}>
                        <i className="uil uil-graduation-cap qualification__icon">Education</i>
                    </div>
                </div>
            </div>

            <div className="qualification__sections">
                <div className={`qualification__content ${toggleState === 1 ? "qualification__content-active" : ""}`}>
                    <div className="qualification__data">
                        <div className='qualification__left'>
                            <h3 className="qualification__title">Dreago</h3>
                            <span className="qualification__subtitle">Atman Partners &<br /> SK C&C</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2022 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">myRPA</h3>
                            <span className="qualification__subtitle">SKC</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className='qualification__left'>
                            <h3 className="qualification__title">DWP</h3>
                            <span className="qualification__subtitle">SK-Hynix</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
                <div className={`qualification__content ${toggleState === 2 ? "qualification__content-active" : ""}`}>
                    <div className="qualification__data">
                        <div className='qualification__left'>
                            <h3 className="qualification__title">Java</h3>
                            <span className="qualification__subtitle">Green Academy</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2020 - 2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Early Childhood Education</h3>
                            <span className="qualification__subtitle">Sprott-shaw College in Canada</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2016 - 2017
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div className='qualification__left'>
                            <h3 className="qualification__title">Silver Industry &<br />Social Welfare</h3>
                            <span className="qualification__subtitle">University of Gangnam</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i>
                                2008 - 2012
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Qualification;