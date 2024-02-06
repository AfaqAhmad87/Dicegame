import React from "react";
import "./index.css";
function TotalScore({ result, value, random }) {
  // console.log(`value${value}`);
  // console.log(`random${random}`);
  return (
    <div id="TotalScore">
      <h1 id="Totalval">{result}</h1>
      <h1 id="Totalval">Total</h1>
    </div>
  );
}

export default TotalScore;
