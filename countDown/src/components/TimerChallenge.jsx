import React from "react";
import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  // const [timeExpired, setTimeExpired] = useState(false);
  // const [timerStarted, setTimerStarted] = useState(false);

  // function handleStart() {
  //   timer.current = setTimeout(() => {
  //     setTimeExpired(true);
  //     dialog.current.open();
  //   }, targetTime * 1000);

  //   setTimerStarted(true);
  // }

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const TimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleRest() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function stopTimer() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleRest}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={TimerActive ? stopTimer : handleStart}>
            {!TimerActive ? "Start" : "Stop"}
          </button>
        </p>
        <p className={TimerActive ? "active" : undefined}>
          {TimerActive ? "Timer is running" : "Timer is inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
