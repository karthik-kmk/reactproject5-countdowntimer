import { useEffect, useState } from "react";
import Thirty from "./components/thirty";
import Fifteen from "./components/fifteen";
import FortyFive from "./components/fortyfive";

import "./App.css";
const App = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [totalSeconds, setTotalSeconds] = useState(0);
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
      const total =
        parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
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
    <div className="app-div">
      <h1 className="title">Timerly</h1>
      <div className="input-div">
        <input
          type="number"
          placeholder="HH"
          onChange={(e) => setHours(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="MM"
          onChange={(e) => setMinutes(e.target.value)}
          className="input"
        />
        <input
          type="number"
          placeholder="SS"
          onChange={(e) => setSeconds(e.target.value)}
          className="input"
        />
      </div>
      <div className="div-show-timer">
        <p className="timer-display">
          {String(displayhours).padStart(2, "0")}:
          {String(displayminutes).padStart(2, "0")}:
          {String(displayseconds).padStart(2, "0")}
        </p>

        <button
          className="button-timer"
          onClick={isRunning ? stoptimer : startTimer}
        >
          {isRunning ? "PAUSE" : "START"}
        </button>
      </div>

      <div className="extra">
        <Fifteen />
        <Thirty />
        <FortyFive />
      </div>
    </div>
  );
};

export default App;
