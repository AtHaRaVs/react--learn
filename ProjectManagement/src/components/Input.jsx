import React from "react";

const Input = ({ textArea, label, ...props }) => {
  return (
    <p>
      <label htmlFor="">{label}</label>
      {textArea ? <textArea {...props} /> : <input {...props} />}
    </p>
  );
};

export default Input;
