import Result from "./result";
import { useState } from "react";

export default function InvestmentInput() {
  const { userInput, setUserInput } = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>INITIAL INVESTMENT</label>
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(event) =>
                handleChange("initialInvestment", event.target.value)
              }
            />
          </p>
          <p>
            <label>INITIAL INVESTMENT</label>
            <input type="number" required />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>INITIAL INVESTMENT</label>
            <input type="number" required />
          </p>

          <p>
            <label>INITIAL INVESTMENT</label>
            <input type="number" required />
          </p>
        </div>
      </section>
      <section>
        <Result />
      </section>
    </>
  );
}
