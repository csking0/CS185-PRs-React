import React , { useState }from 'react';
import './style.css';

import nemui from './pics/nemui.jpg';
import kyuu from './pics/kyuu.jpg';
import cyberboard from './pics/cyberboard.jpeg';
import candybar from './pics/candybar.jpg';
import image1 from './pics/image1.jpg';
import image2 from './pics/image2.jpg';
import image3 from './pics/image3.jpg';
import image4 from './pics/image4.jpg';

function Images() {

    var [overlayImage, setOverlayImage] = useState(nemui);
    var [overlayStatus, toggleOverlay] = useState(false);
    var [topButtonStatus, toggleTopButton] = useState(false);

    function spawnOverlay(image) {
        setOverlayImage(image);
        toggleOverlay(true);
    }

    function despawnOverlay() {
        toggleOverlay(false);
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

            <div className="img_grid">
                <div className="img_grid_column">
                    <img className="img_thumbnail" src={nemui} onClick={() => spawnOverlay(nemui)}/>
                </div>
                <div className="img_grid_column">
                    <img className="img_thumbnail" src={kyuu} onClick={() => spawnOverlay(kyuu)}/>
                </div>
                <div className="img_grid_column">
                    <img className="img_thumbnail" src={cyberboard} onClick={() => spawnOverlay(cyberboard)}/>
                </div>
                <div className="img_grid_column">
                    <img className="img_thumbnail" src={candybar} onClick={() => spawnOverlay(candybar)}/>
                </div>
                <div className="img_grid_column">
                    <img className="img_thumbnail" src={image4} onClick={() => spawnOverlay(image4)}/>
                </div>
                <div className="img_grid_column">
                    <img className="img_thumbnail" src={image1} onClick={() => spawnOverlay(image1)}/>
                </div>
                <div className="img_grid_column">
                    <img className="img_thumbnail" src={image2} onClick={() => spawnOverlay(image2)}/>
                </div>
                <div className="img_grid_column">
                    <img className="img_thumbnail" src={image3} onClick={() => spawnOverlay(image4)}/>
                </div>
            </div>

            <div className="modal" onClick={() => despawnOverlay()} style = {{display: overlayStatus ? "block" : "none"}}>
                <img className="modal_image" src={overlayImage}/>
            </div>

            <button onClick={() => goToTop()} id="top_button" title="To Top" style = {{display: topButtonStatus ? "block" : "none"}}>Top</button>

        </div>

    )

}

export default Images;
