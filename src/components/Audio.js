import React from 'react'
import "./Audio.css"
import img1 from "./assets/images/img1.jpg"
import img2 from "./assets/images/img2.jpg"
import img3 from "./assets/images/img3.jpg"
import audio from "./audio.mp3"

function Audio() {
    return (
        <div className="audio" style={{position: "relative", height: "100vh", width: "100%",  zIndex: "100",}}>
            <div class="box1 boxes"><img src={img1} alt="" /></div>
            <div class="box2 boxes"><img src={img2} alt="" /></div>
            <div class="box3 boxes"><img src={img3} alt="" /></div>
            <h1>SHE IS THE ONE</h1>
            <audio controls autoplay muted loop style={{position: "absolute", top: "74%", left: "40%"}}>
                <source src={audio} type="audio/mpeg" />
            </audio>
            <h3 style={{position: "absolute", top: "95%", left: "85%"}}>#Chintu Developers &copy; 2024</h3>
        </div>
    )
}

export default Audio
