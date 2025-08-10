import React, { useState, useRef } from "react";

function App() {
  const [reactTitle, setReactTitle] = useState("React Title");
  const [reactCount, setReactCount] = useState(0);
  const vanillaCount = useRef(0);
  const [, forceRender] = useState(0); // Used only to trigger re-render for vanilla counter

  const changeReactTitle = () => {
    setReactTitle(reactTitle === "React Title" ? "React Title Changed" : "React Title");
    setReactCount(reactCount + 1);
  };

  const changeVanillaTitle = () => {
    document.title = document.title === "Vanilla Title" ? "Vanilla Title Changed" : "Vanilla Title";
    vanillaCount.current += 1;
    forceRender(x => x + 1); // To re-render and show the new vanillaCount
  };

  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <button onClick={changeVanillaTitle}>
        Change Title (Vanilla JS)
      </button>
      <span style={{ marginLeft: 8 }}>DOM updates: {vanillaCount.current}</span>
      <br /><br />
      <button onClick={changeReactTitle}>
        Change Title (React)
      </button>
      <span style={{ marginLeft: 8 }}>React updates: {reactCount}</span>
      <br /><br />
      <p>React Title: {reactTitle}</p>
    </div>
  );
}

export default App