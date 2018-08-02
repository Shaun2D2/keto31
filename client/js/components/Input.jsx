import React from 'react';

const Input = ({ type, value, label, onChange, name }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type}
      className="form-control"
      value={value}
      name={name}
      onChange={onChange}
    />
  </div>
);

export default Input;
