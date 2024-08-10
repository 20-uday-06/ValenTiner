import React from 'react'
import Qr from "../components/3QR.png"
function Qrcode() {
    return (
        <>
            <div style={{ position: "realtive", height: "100vh", width: "100%", paddingLeft: "4vw", display: "flex", justifyContent: "left", alignItems: "center",backgroundImage: "url(https://img.freepik.com/free-vector/black-background-with-hand-drawn-hearts_1017-17239.jpg?t=st=1723057598~exp=1723061198~hmac=709cad32be242b47d259cddadc95c6bbf09832c87c2af3180c3e581f99b6b44d&w=996)", backgroundSize: "cover", backgroundPosition: 'center'}}>
            
            <div style={{display: "flex",  flexDirection: "column", justifyContent: "center", gap: "20px"}}>
                <h1 style={{fontSize: "3.5vw", color: "#fff", textAlign: "left", display: "inline", fontWeight: "bold"}}>A Special Message To You</h1>
                <div style={{ height: "60%", width: "40%"}}>
                    <img src={Qr} style={{ height: "100%", width: "100%", borderRadius: "25px"}}/>
                </div>
                </div>
            </div>
            <div style={{position: "absolute", top: "80%", left: "47%"}}>
                <a href="/audio">
                <button class="button" style={{fontSize: "2vw", borderRadius: "20px", padding: "0.7vw 2.3vw", color: "white", backgroundColor: "red", fontWeight: "bold"}}>Next</button>
                </a>
            </div>
        </>
    )
}

export default Qrcode
