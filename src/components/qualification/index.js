import React, { useState } from 'react';
import './qualification.css';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    // Toggle Tab
    const onClickToggle = (index) => {
        setToggleState(index);
    };

    const onClickCloseModal = () => {
        setToggleState(0);
    };
    return (
        <section className="qualification section" id='qualification'>
            <h2 class="section__title">Qualification</h2>
            <span class="section__subtitle">My personal journey</span>

            <div class="qualification__container container">
                <div class="qualification__tabs">
                    <div class={`qualification__button ${toggleState === 1 ? "qualification__active" : ""} button--flex`} onClick={() => onClickToggle(1)}>
                        <i class="uil uil-briefcase qualification__icon">Experience</i>
                    </div>
                    <div class={`qualification__button ${toggleState === 2 ? "qualification__active" : ""} button--flex`} onClick={() => onClickToggle(2)}>
                        <i class="uil uil-graduation-cap qualification__icon">Education</i>
                    </div>
                </div>
            </div>

            <div class="qualification__sections">
                <div class={`qualification__content ${toggleState === 1 ? "qualification__content-active" : ""}`}>
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Dreago</h3>
                            <span class="qualification__subtitle">Atman Partners &<br /> SK C&C</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2022 - Present
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>

                        <div>
                            <h3 class="qualification__title">myRPA</h3>
                            <span class="qualification__subtitle">SKC</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2021 - Present
                            </div>
                        </div>
                    </div>
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">DWP</h3>
                            <span class="qualification__subtitle">SK-Hynix</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2021
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                </div>
                <div class={`qualification__content ${toggleState === 2 ? "qualification__content-active" : ""}`}>
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Java</h3>
                            <span class="qualification__subtitle">Green Academy</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2020 - 2021
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                    <div class="qualification__data">
                        <div></div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                        <div>
                            <h3 class="qualification__title">Early Childhood Education</h3>
                            <span class="qualification__subtitle">Sprott-shaw College in Canada</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2016 - 2017
                            </div>
                        </div>
                    </div>
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Silver Industry &<br />Social Welfare</h3>
                            <span class="qualification__subtitle">University of Gangnam</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i>
                                2008 - 2012
                            </div>
                        </div>
                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;