import React from "react";
import { useEffect, useState } from "react";
import "./extra.css";

const thirty = () => {
  const [totalSeconds, setTotalSeconds] = useState(15 * 60);
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
      setTotalSeconds(total);
    }
    setIsRunning(true);
  };

  const stoptimer = () => {
    setIsRunning(false);
  };
  const displayhours = Math.floor(totalSeconds / 3600);
  const displayminutes = Math.floor((totalSeconds % 3600) / 60);
  const displayseconds = Math.floor(totalSeconds % 60);
  return (
    <div className="div-extra">
      <p className="title-extra">15 Minutes</p>

      <p className="time-display-extra">
        {String(displayhours).padStart(2, "0")}:
        {String(displayminutes).padStart(2, "0")}:
        {String(displayseconds).padStart(2, "0")}
      </p>

      <button
        className="time-display-btn-extra"
        onClick={isRunning ? stoptimer : startTimer}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
    </div>
  );
};

export default thirty;
