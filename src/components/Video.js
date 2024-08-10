import React from 'react';
import './Video.css';
import Videoo from './video1.mp4';

function Video() {
    return (
        <div id="main" style={{ position: "absolute", backdropFilter: "blur(6px)", zIndex: "15" }}>
            `<video autoPlay loop style={{
                height: "90%", borderRadius
                    : "20px", position: "relative", left: "34%", top: "30px"
            }}>
                <source src={Videoo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div style={{ position: "absolute", top: "90%", left: "42%" }}>
                <a href="/swipper">
                <button class="button" style={{ fontSize: "2vw", borderRadius: "20px", padding: "0.7vw 2.3vw", color: "white", backgroundColor: "red", fontWeight: "bold" }}>Continue</button>
            </a>
        </div>
    </div >
    )
}

export default Video
