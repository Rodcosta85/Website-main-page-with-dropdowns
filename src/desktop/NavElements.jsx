import React, { useState } from "react";
import MainColOne from './MainColOne.jsx';
import MainColTwo from './MainColTwo.jsx';
import './NavElements.css';
import ArrowDown from '/images/icon-arrow-down.svg';
import ArrowUp from '/images/icon-arrow-up.svg';

const newNav = () => {
    const [triggerFeature, setTriggerFeature] = useState(false);
    const [triggerCompany, setTriggerCompany] = useState(false);

    const seeColOne = () => {
        setTriggerFeature(openFirstCol => !openFirstCol);
    }

    const seeColTwo = () => {
        setTriggerCompany(openSecCol => !openSecCol)
    }


    return (
        <>
            <div id="nav-insert">
                <button onClick={seeColOne} id="feat-btn">
                    <p id="paragraph-feat">Features</p>
                    <img
                        className="arrows"
                        src={triggerFeature ? ArrowUp : ArrowDown}
                        alt="arrow down" 
                    />
                </button>
                {triggerFeature && <MainColOne seeColOne={seeColOne} />}
                <button onClick={seeColTwo} id="company-btn">
                    <p id="paragraph-comp">Company</p>
                    <img
                        src={triggerCompany ? ArrowUp : ArrowDown}
                        alt="arrow down" 
                    />
                </button>
                {triggerCompany && <MainColTwo seeColTwo={seeColTwo} />}
                <a className="anchors" href=""><p>Careers</p></a>
                <a className="anchors" href=""><p>About</p></a>
                <div id="right-rest">
                    <a id="login-anchor" href=""><p>Login</p></a>
                    <button id="og-register">Register</button>
                </div>
            </div>

        </>
    )
}

export default newNav;