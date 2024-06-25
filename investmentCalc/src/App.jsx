import Header from "./components/Header";
import InvestmentInput from "./components/InvestmentInput";
import Result from "./components/result";

import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  const durationError = userInput.duration >= 1;

  return (
    <>
      <Header />
      <InvestmentInput onChange={handleChange} userInput={userInput} />
      {!durationError && <p>Duration should be greater than or equal to 1.</p>}
      {durationError && <Result userInput={userInput} />}
    </>
  );
}

export default App;
