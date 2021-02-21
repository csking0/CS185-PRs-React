import React, { useState } from 'react';
import './style.css';

import thumbnail1 from './pics/video0.jpg';
import thumbnail2 from './pics/video1.jpg';
import thumbnail3 from './pics/video2.jpg';
import thumbnail4 from './pics/video3.jpg';
import thumbnail5 from './pics/video4.jpg';

function Videos() {

    var [overlayVideo, setOverlayVideo] = useState(1);
    var [overlayStatus, toggleOverlay] = useState(false);
    var [topButtonStatus, toggleTopButton] = useState(false);

    function spawnOverlay(videoNumber) {
        setOverlayVideo(videoNumber);
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
            <h1>Typing ASMR</h1>

            <div className="video_grid">
                <div className="video_grid_column">
                    <img className="video_thumbnail" src={thumbnail1} onClick={() => spawnOverlay(1)}/>
                </div>
                <div className="video_grid_column">
                    <img className="video_thumbnail" src={thumbnail2} onClick={() => spawnOverlay(2)}/>
                </div>
                <div className="video_grid_column">
                    <img className="video_thumbnail" src={thumbnail3} onClick={() => spawnOverlay(3)}/>
                </div>
                <div className="video_grid_column">
                    <img className="video_thumbnail" src={thumbnail4} onClick={() => spawnOverlay(4)}/>
                </div>
                <div className="video_grid_column">
                    <img className="video_thumbnail" src={thumbnail5} onClick={() => spawnOverlay(5)}/>
                </div>
            </div>

            <div className="modal" onClick={() => despawnOverlay()} style = {{display: overlayStatus && overlayVideo == 1 ? "block" : "none"}}>
                <div className="modal_video">
                    <iframe
                        width="100%"
                        height="700px"
                        src="https://www.youtube.com/embed/_T6zSYWdWWM"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div className="modal" onClick={() => despawnOverlay()} style = {{display: overlayStatus && overlayVideo == 2 ? "block" : "none"}}>
                <div className="modal_video">
                    <iframe
                        width="100%"
                        height="700px"
                        src="https://www.youtube.com/embed/btltkRi-OdI"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div className="modal" onClick={() => despawnOverlay()} style = {{display: overlayStatus && overlayVideo == 3 ? "block" : "none"}}>
                <div className="modal_video">
                    <iframe
                        width="100%"
                        height="700px"
                        src="https://www.youtube.com/embed/FiQNP2t5seY"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div className="modal" onClick={() => despawnOverlay()} style = {{display: overlayStatus && overlayVideo == 4 ? "block" : "none"}}>
                <div className="modal_video">
                    <iframe
                        width="100%"
                        height="700px"
                        src="https://www.youtube.com/embed/C-fZAVVEJHQ"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div className="modal" onClick={() => despawnOverlay()} style = {{display: overlayStatus && overlayVideo == 5 ? "block" : "none"}}>
                <div className="modal_video">
                    <iframe
                        width="100%"
                        height="700px"
                        src="https://www.youtube.com/embed/aeqnEJpPZVY"
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>

            <button onClick={() => goToTop()} id="top_button" title="To Top" style = {{display: topButtonStatus ? "block" : "none"}}>Top</button>

        </div>

    )

}

export default Videos;
