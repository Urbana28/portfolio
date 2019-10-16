import React from 'react'
import s from './Skills.module.css'
import css from '../../img/css.png';
import html from '../../img/html.png';
import JS from '../../img/JS.png';
import react from '../../img/react-hexagon.png'

const Skills = () => {
    return (
        <div className={s.outer}>
            <div className={s.container}>
                <div className={s.skillsWrapper}>
                    <div className={s.skillsHeader}> Skills </div>
                    <div className={s.skillsBody}>
                        <div className={s.skill}>
                            <div className={s.skillIcon}><img
                                src='https://icon-library.net/images/html-5-icon/html-5-icon-9.jpg' alt=""/></div>
                            <div className={s.skillName}>HTML</div>
                            <div className={s.skillInfo}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </div>
                        </div>
                        <div className={s.skill}>
                            <div className={s.skillIcon}><img
                                src='https://cdn4.iconfinder.com/data/icons/iconsimple-programming/512/css-512.png'
                                alt=""/></div>
                            <div className={s.skillName}>CSS</div>
                            <div className={s.skillInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.</div>
                        </div>
                        <div className={s.skill}>
                            <div className={s.skillIcon}><img
                                src='https://icon-library.net/images/js-icon/js-icon-24.jpg' alt=""/></div>
                            <div className={s.skillName}>JS</div>
                            <div className={s.skillInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.</div>
                        </div>
                        <div className={s.skill}>
                            <div className={s.skillIcon}><img
                                src='https://sap.github.io/ui5-webcomponents/images/react.svg' alt=""/></div>
                            <div className={s.skillName}>ReactJS</div>
                            <div className={s.skillInfo}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.</div>
                        </div>
                        <div className={s.skill}>
                            <div className={s.skillIcon}><img
                                src='https://miro.medium.com/max/1400/0*U2DmhXYumRyXH6X1.png' alt=""/></div>
                            <div className={s.skillName}>Redux</div>
                            <div className={s.skillInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.</div>
                        </div>
                        <div className={s.skill}>
                            <div className={s.skillIcon}><img
                                src='https://camo.githubusercontent.com/5e511d0a0f2dcd66a843017402001844861979a4/68747470733a2f2f64323169693931693379366f36682e636c6f756466726f6e742e6e65742f67616c6c6572795f696d616765732f66726f6d5f70726f6f662f31303037342f6c617267652f313435353731343038312f747970657363726970742e706e67'
                                alt=""/></div>
                            <div className={s.skillName}>TypeScript</div>
                            <div className={s.skillInfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    )
};

export default Skills