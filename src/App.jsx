import React from "react";
import Start from "./Start.jsx";
import WhenStarted from "./WhenStarted.jsx";
import { useState } from "react";

function App() {
  const [isstarted, setstarted] = useState(true);

  const startIt = () => {
    setstarted((prevalue) => !prevalue);
  };
  return <div>{isstarted ? <Start toggle={startIt} /> : <WhenStarted />}</div>;
}

export default App;
