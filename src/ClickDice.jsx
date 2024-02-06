import React, { useState } from "react";

function ClickDice({ random, setrandom }) {
  const getRandomArbitrary = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const dice = () => {
    const roll = getRandomArbitrary(1, 7);

    setrandom((pre) => roll);
  };

  return (
    <div onClick={dice}>
      <img src={`/imagess/dice_${random}.png`} alt="" />
    </div>
  );
}

export default ClickDice;
