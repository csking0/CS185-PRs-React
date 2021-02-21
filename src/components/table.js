import React, { useState }  from 'react';
import './style.css';

function Table() {

    var [topButtonStatus, toggleTopButton] = useState(false);

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
            <h1>List of Parts:</h1>

            <table>
                <tr>
                    <th>Part</th>
                    <th>Description</th>
                    <th>Material</th>
                    <th>Source</th>
                </tr>
                <tr>
                    <td>Case</td>
                    <td>65% form factor case. White color. Includes brass weight.</td>
                    <td>aluminum</td>
                    <td><a target="_blank" href="https://www.kbdfans.com">KBDfans</a></td>
                </tr>
                <tr>
                    <td>PCB</td>
                    <td>Circuit board to solder switches onto. 65% form factor with usb-c connection.</td>
                    <td>various</td>
                    <td><a target="_blank" href="https://www.kbdfans.com">KBDfans</a></td>
                </tr>
                <tr>
                    <td>Cover Plate</td>
                    <td>Covers the PCB for protection and aesthetic reasons.</td>
                    <td>brass</td>
                    <td><a target="_blank" href="https://www.kbdfans.com">KBDfans</a></td>
                </tr>
                <tr>
                    <td>Internal Dampening Foam</td>
                    <td>Dampens vibrations, improving sound quality. Keyboard sounds less hollow when typing. 1 layer between the bottom of the case and the PCB. A second layer between the PCB and the cover plate.</td>
                    <td>EVA foam</td>
                    <td><a target="_blank" href="https://www.kbdfans.com">KBDfans</a></td>
                </tr>
                <tr>
                    <td>Stabilizers</td>
                    <td>Used to stabilize wobble when pressing large keys (backspace, enter, shift, spacebar).</td>
                    <td>plastic, metal wire</td>
                    <td><a target="_blank" href="https://zealpc.net">ZealPC</a></td>
                </tr>
                <tr>
                    <td>Lubricant</td>
                    <td>Gives a smoother feeling to stabilizers and switches. Must use a special grease mix: Krytox 205g0.</td>
                    <td>perfluoropolyether oil</td>
                    <td><a target="_blank" href="https://www.1upkeyboards.com">1upkeyboards</a></td>
                </tr>
                <tr>
                    <td>Switches</td>
                    <td>The mechanism behind every key. 62g bottom out force. Tactile bump on stem.</td>
                    <td>plastic, copper</td>
                    <td><a target="_blank" href="https://zealpc.net">ZealPC</a></td>
                </tr>
                <tr>
                    <td>Keycaps</td>
                    <td>Cherry profile. Black-on-white design.</td>
                    <td>PBT plastic</td>
                    <td><a target="_blank" href="https://thekey.company">The Key Dot Co</a></td>
                </tr>
            </table>

            <button onClick={() => goToTop()} id="top_button" title="To Top" style = {{display: topButtonStatus ? "block" : "none"}}>Top</button>

            
        </div>

    )

}

export default Table;
