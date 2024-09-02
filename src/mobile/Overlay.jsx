import React, { useState } from 'react';
import './Overlay.css';
import FeatureColumn from '../FeatureColumn';
import CompanyColumn from '../CompanyColumn';



const overlayMenu = ({ toggleOverlay }) => {
    const [isColumnOneVisible, setIsColumnOneVisible] = useState(false);
    const [isColumnTwoVisible, setIsColumnTwoVisible] = useState(false);

    const clickColumnOne = () => {
        setIsColumnOneVisible(prevState => !prevState);
    }

    const clickColumnTwo = () => {
        setIsColumnTwoVisible(newState => !newState);
    }

    return (
        <>
            <div id="black-filter"></div>
            <div id="white-div">
                <button id="x" onClick={toggleOverlay}>
                    <img id="x-btn" src="/images/icon-close-menu.svg" alt="x button" />
                </button>
                <div id="group">
                    <button onClick={clickColumnOne} id="feat-overlay">
                        <p id="feat-p">Features</p>
                        <img className="arrow-d" src="images/icon-arrow-down.svg" alt="arrow down" />
                    </button>
                    {isColumnOneVisible && <FeatureColumn clickColumnOne={clickColumnOne} />}
                    <button onClick={clickColumnTwo} id="comp-overlay">
                        <p id="comp-p" >Company</p>
                        <img className="arrow-d" src="images/icon-arrow-down.svg" alt="" />
                    </button>
                    {isColumnTwoVisible && <CompanyColumn clickColumnTwo={clickColumnTwo} />}
                    <a href=""><p id="car-ov">Careers</p></a>
                    <a href=""><p id="ab-ov">About</p></a>
                    <div id="login-reg-ov">
                        <a href=""><p id="log-ov">Login</p></a>
                        <button type="button" id="register-overlay">Register</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default overlayMenu;