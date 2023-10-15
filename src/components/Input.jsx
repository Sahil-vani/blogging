import React, { useId, forwardRef } from "react";
import "./style.scss";

function Input({ label, placeholder = "", type = "text", ...props }, ref) {
  const id = useId();

  return (
    <div className="input">
      {label && (
        <label htmlFor={id} className="label">
          {label}
        </label>
      )}

      <input
        type={type}
        className="customizeInput"
        placeholder={placeholder}
        ref={ref}
        id={id}
        {...props}
      />
    </div>
  );
}

export default forwardRef(Input);
