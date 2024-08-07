import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(function Input({ textArea, label, ...props }, ref) {
  const inputClases =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label htmlFor="" className="text-sm uppercase text-stone-500 font-bold">
        {label}
      </label>
      {textArea ? (
        <textarea ref={ref} className={inputClases} {...props} />
      ) : (
        <input ref={ref} className={inputClases} {...props} />
      )}
    </p>
  );
});

export default Input;
