import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "antd";
import "./index.css";
import img1 from "./images/dices.png";

function Start({ toggle }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <h1>Start The game</h1>
          <Button type="primary" id="Button" onClick={toggle}>
            Start The Game
          </Button>
        </div>
      </main>
    </>
  );
}

export default Start;
