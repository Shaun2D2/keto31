import React from 'react';

const Button = ({ design, onClick, children }) => (
  <button
    type="button"
    className={`btn ${design}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
