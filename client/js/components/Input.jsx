import React from 'react';

const Input = ({ type, value, label, onChange, name, autofocus }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type || 'text'}
      className="form-control"
      value={value}
      name={name}
      onChange={onChange}
      autoFocus={autofocus}
    />
  </div>
);

export default Input;
