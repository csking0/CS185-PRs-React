import React , { useState } from 'react';
import './style.css';

function Text() {

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
            <h1>Pick Your Favorite Keyboard Switch</h1>
            <form>
                <label for="first_name">First name:</label><br/>
                <input type="text" id="first_name" name="first_name"/><br/>
                <label for="last_name">Last name:</label><br/>
                <input type="text" id="last_name" name="last_name"/><br/><br/>

                <input type="radio" id="novelkeys_cream" name="switch_preference" value="novelkeys_cream"/>
                <label for="novelkeys_cream">Novelkeys Cream</label><br/>
                <input type="radio" id="c3_equalz_tangerine" name="switch_preference" value="c3_equalz_tangerine"/>
                <label for="c3_equalz_tangerine">C^3 Equalz Tangerine</label><br/>
                <input type="radio" id="drop_holy_panda" name="switch_preference" value="drop_holy_panda"/>
                <label for="drop_holy_panda">Drop Holy Panda</label><br/>
                <input type="radio" id="zeal_zilents" name="switch_preference" value="zeal_zilents"/>
                <label for="zeal_zilents">Zeal Zilents</label><br/>
                <input type="radio" id="kalih_box_jade" name="switch_preference" value="kalih_box_jade"/>
                <label for="kalih_box_jade">Kalih Box Jade</label><br/><br/>

                <input type="submit" value="Submit"/>
            </form>

            <button onClick={() => goToTop()} id="top_button" title="To Top" style = {{display: topButtonStatus ? "block" : "none"}}>Top</button>
        </div>

    )

}

export default Text;
