import React, { Fragment } from "react";
import "../components/Reels.scss";

let count = 200;
let points = [];

function Confetti({ open }) {
  let confetti = generatePoints();

  function generatePoints() {
    points = [];

    for (let i = 0; i < count; i++) {
      points.push(<p className={`${open ? "animated" : ""}`} key={i} />);
    }
    return points;
  }

  return (
    
    <div id="shivansh_madar_chod_hai" style={{position:"relative"}}>
    <Fragment>
      <div className={`confetti ${open ? "animated" : ""}`}>
        {confetti.map(c => c)}
      </div>
    </Fragment>
    </div>
  );
}

export default Confetti;
