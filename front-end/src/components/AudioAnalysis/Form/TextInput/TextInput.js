// TextInput.js
import React from "react";

function TextInput({ label, name, value, onChange, required, error }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        required={required}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default TextInput;
