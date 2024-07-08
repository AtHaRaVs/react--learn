import React from "react";
import { useState } from "react";

const TimerChallenge = ({ title, targetTime }) => {
  const [timeExpired, setTimeExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You lost</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={handleStart}>
          {!timerStarted ? "Start" : "Stop"}
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Timer is running" : "Timer is inactive"}
      </p>
    </section>
  );
};

export default TimerChallenge;
