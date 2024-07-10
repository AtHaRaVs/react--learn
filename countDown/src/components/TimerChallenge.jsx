import React from "react";
import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();

  const [timeExpired, setTimeExpired] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function stopTimer() {
    clearTimeout(timer.current);
  }

  return (
    <>
      {timeExpired && <ResultModal targetTime={targetTime} result="lost" />}
      <section className="challenge">
        <h2>{title}</h2>
        {timeExpired && <p>You lost</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? stopTimer : handleStart}>
            {!timerStarted ? "Start" : "Stop"}
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Timer is running" : "Timer is inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
