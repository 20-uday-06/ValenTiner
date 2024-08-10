import React, { useReducer } from "react";
import "./Reells.css";

import box from "./components/assets/images/box.png";
import boxLid from "./components/assets/images/box-lid.png";
import kuku from "./components/assets/images/jump-character.png";
// import ConfettiGenerator from "./CanvasConfetti";
// import Confetti from "./components/Reels.css";
import Confetti from "react-confetti";  

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: ""
};
export default function GiftBoxAnimation() {
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state
    }),
    init_state
  );

  const { move, rotating, rotated, jump } = state;

  function animate() {
    let isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }

  return (


    <div className="App">
      <div className="bhagwanbharose">
      <Confetti open={jump === "jump"} />

      <div className="img-container" style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <div style={{paddingTop: "10vw", position: "relative"}}>
                <a href="/video" style={{marginTop: "5vh"}}>
                <button class="button" style={{fontSize: "2vw", borderRadius: "20px", padding: "0.7vw 2.3vw", color: "white", backgroundColor: "red", fontWeight: "bold" }}>Click Me :)</button>
                </a>
            </div>
            <div className="dabba" style={{position: "relative", height: "40vh", width: "100%"}}>
        <img className={`kuku ${jump}`} src={kuku} alt="kuku" />

        <button className="box" onClick={() => animate()}>
          <img src={box} alt="box" />
        </button>
        <img
          className={`lid ${move} ${rotating} ${rotated}`}
          src={boxLid}
          alt="box-lid"
        />
        </div>
      </div>
    </div>
    </div>
  );
}
