import React, { useState, useRef } from "react";
import styles from "./DynamicImage.module.css";
import K1 from "./Images/K1.png";
import K2 from "./Images/K2.png";

const DynamicImage = () => {
  const [position, setPosition] = useState(250);

  const reference = useRef();
  
  function showCoords(event) {
    // let rect = event.target.getBoundingClientRect();
    // let selectedDiv = document.querySelector("#container").getBoundingClientRect();
    let selectedDiv = reference.current.getBoundingClientRect();
    let elementPosition = selectedDiv.left;
    let x = event.clientX;
    let result = x - elementPosition;
    setPosition(result);
  }

  return (
    <div className={styles.mainContainer}>
      <div
        ref={reference}
        className={styles.container}
        id="container"
        onMouseMove={(event) => showCoords(event)}
      >
        <img
          src={K2}
          alt="leftImage"
          className={styles.k2}
          style={{ clip: `rect(auto, auto, auto, ${position}px)` }}
        />
        <img
          src={K1}
          alt="leftImage"
          className={styles.k1}
          style={{ clip: `rect(auto, ${position}px, auto, auto)` }}
        />
        <div
          className={styles.lineContainer}
          style={{ left: `calc(${position}px - 20px)` }}
        >
          <div className={styles.line}></div>
        </div>
        {/* <p>x: {position}px</p> */}
      </div>
    </div>
  );
};

export default DynamicImage;
