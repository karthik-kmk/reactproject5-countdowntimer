import React, { useEffect, useState } from "react";
import "./extra.css";

const Thirty = () => {
  const INITIAL_TIME = 15 * 60; // 15 minutes in seconds

  const [totalSeconds, setTotalSeconds] = useState(INITIAL_TIME);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (isRunning && totalSeconds > 0) {
      const timer = setTimeout(() => {
        setTotalSeconds((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (totalSeconds === 0) {
      setIsRunning(false);
    }
  }, [isRunning, totalSeconds]);

  const startTimer = () => {
    if (totalSeconds === 0) {
      setTotalSeconds(INITIAL_TIME);
    }
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    if (!isRunning) {
      setTotalSeconds(INITIAL_TIME);
    } else {
      alert("Pause the timer before resetting");
    }
  };

  const displayHours = Math.floor(totalSeconds / 3600);
  const displayMinutes = Math.floor((totalSeconds % 3600) / 60);
  const displaySeconds = totalSeconds % 60;

  return (
    <div className="div-extra">
      <p className="title-extra">15 Minutes</p>

      <p className="time-display-extra">
        {String(displayHours).padStart(2, "0")}:
        {String(displayMinutes).padStart(2, "0")}:
        {String(displaySeconds).padStart(2, "0")}
      </p>

      <div className="btn-divs">
        <button
          className="time-display-btn-extra"
          onClick={isRunning ? stopTimer : startTimer}
        >
          {isRunning ? "PAUSE" : "START"}
        </button>

        <button className="time-display-btn-extra" onClick={resetTimer}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Thirty;
