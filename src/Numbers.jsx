import React, { useState } from "react";
import "./index.css";
import styled from "styled-components";

function Numbers({ value, setvalue }) {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <div id="class">
      {array.map((val, i) => {
        return (
          <div className="numbers" key={i} onClick={() => setvalue(val)}>
            {val}
          </div>
        );
      })}
    </div>
  );
}

export default Numbers;
