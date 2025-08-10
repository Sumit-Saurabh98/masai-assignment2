import React, { useState, useEffect, useRef } from "react";
import soundFile from "../music/a.mp3"; // Make sure the path is correct

export default function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(10);
  const intervalRef = useRef(null);
  const audioRef = useRef(new Audio(soundFile));

  // Handle timer logic
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isRunning]);

  // Check if target time is reached
  useEffect(() => {
    if (seconds === targetTime) {
      audioRef.current.play().catch(() => {
        console.log("Sound could not play automatically");
      });
    }
  }, [seconds, targetTime]);

  // Start button
  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  // Stop button
  const handleStop = () => {
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  // Reset button
  const handleReset = () => {
    setSeconds(0);
    setIsRunning(false);
    clearInterval(intervalRef.current);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Stopwatch</h1>
      <h2>{seconds} sec</h2>

      <div>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label>
          Target Time (seconds):{" "}
          <input
            type="number"
            value={targetTime}
            onChange={(e) => setTargetTime(Number(e.target.value))}
          />
        </label>
      </div>
    </div>
  );
}
