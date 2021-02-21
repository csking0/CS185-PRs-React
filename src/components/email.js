import React, { useState } from 'react';
import './style.css';

function Email() {

    var [email, setEmail] = useState("")
    // 0 = nothing entered
    // 1 = valid email
    // 2 = invalid email
    var [validEmailStatus, setValidEmailStatus] = useState(0);
    var [topButtonStatus, toggleTopButton] = useState(false);

    function processFormChange(e) {
        setEmail(e.target.value);
    }

    function processForm(e) {
        e.preventDefault();
        validateEmail(email);
    }

    function validateEmail(input) {
        // var validFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.substring(email.length - 4) !== ".com" && email.substring(email.length - 4) !== ".edu") {
            setValidEmailStatus(2);
        }
        else if (email.search("@") === -1) {
            setValidEmailStatus(2);
        }
        else {
            setValidEmailStatus(1);
        }
    }

    window.onscroll = () => scrollDetector();

    function scrollDetector() {
        var scrollTop = window.scrollY;
        var documentHeight = document.body.offsetHeight;
        var windowHeight = window.innerHeight;
        var scrollPercent = 100 * scrollTop / (documentHeight - windowHeight)
        if (scrollPercent > 25) {
            // display goToTop button when scrolled past 1/4 of the page
            toggleTopButton(true);
        }
        else {
            toggleTopButton(false);
        }
    }

    function goToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (

        <div>
            <h1>Email Verification</h1>

            <form name="email_form">
                <label for="email">Email:</label><br/>
                <input type="text" id="email" name="email" value={email} onChange={(e) => processFormChange(e)}/><br/><br/>

                <input type="submit" value ="Submit" onClick={(e) => processForm(e)}/>
            </form>

            <h3 style = {{display: validEmailStatus == 1 ? "block" : "none"}}>Email successfully recorded.</h3>
            <h3 style = {{display: validEmailStatus == 2 ? "block" : "none"}}>Invalid email address.</h3>
        
            <button onClick={() => goToTop()} id="top_button" title="To Top" style = {{display: topButtonStatus ? "block" : "none"}}>Top</button>

        </div>

    )

}

export default Email;
