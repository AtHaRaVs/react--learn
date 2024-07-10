import React from "react";
import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime}</strong> seconds.
      </p>
      <p>
        You stopped time with <strong>X seconds left</strong>
      </p>
      <form action="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;
