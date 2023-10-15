import React, { useId, forwardRef } from "react";

function Select({ options = [], label, ...props }, ref) {
  const id = useId();
  return (
    <div className="select">
      {label && <label htmlFor={id}>{label}</label>}

      <select className="selectBtn" id={id} ref={ref} {...props}>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default forwardRef(Select);
