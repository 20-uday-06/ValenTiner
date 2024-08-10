import React from 'react'
import './Video.css'

function Video() {
    return (
        <div id="main" style={{position: "absolute", backgroundColor: "#fff", zIndex: "15"}}>
            <div id = "heart" style={{position: "absolute", left: "30%"}}>
                
            </div>
            <div style={{position: "absolute", top: "90%", left: "42%"}}>
                <a href="/swipper">
                <button class="button" style={{fontSize: "2vw", borderRadius: "20px", padding: "0.7vw 2.3vw", color: "white", backgroundColor: "red", fontWeight: "bold" }}>Continue</button>
                </a>
            </div>
    </div>
    )
}

export default Video
