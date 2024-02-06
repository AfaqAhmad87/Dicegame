import React, { useEffect, useState } from "react";
import TotalScore from "./TotalScore";
import Numbers from "./Numbers";
import ClickDice from "./ClickDice";
import { Button } from "antd";
import "./index.css";

function WhenStarted() {
  const [result, setresult] = useState(0);
  const [value, setvalue] = useState(0);
  const [random, setrandom] = useState(1);

  // const func = () => {
  //   if (random === value) {
  //     setresult((pre) => pre + 2);
  //   } else {
  //     setresult((pre) => pre - 1);
  //   }
  // };
  console.log(`qqqqqq${random}`);
  console.log(value);

  useEffect(() => {
    if (value !== 0) {
      if (value === random) {
        setresult((pre) => pre + 6);
      } else {
        setresult((pre) => pre - 1);
      }
    }
  }, [random]);
  const empty = () => {
    setresult((pre) => 0);
  };

  return (
    <>
      <div id="flex">
        <TotalScore result={result} />
        <Numbers value={value} setvalue={setvalue} />
      </div>
      <div className="click">
        <ClickDice random={random} setrandom={setrandom} />
        <h2>Click on dice</h2>
        <Button type="primary" id="Button" onClick={empty}>
          Reset
        </Button>
      </div>
    </>
  );
}

export default WhenStarted;
