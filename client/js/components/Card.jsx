import React from 'react';

import '../../sass/Card.scss';

const Card = ({ children }) => (
  <div className="card">
    {children}
  </div>
);

export default Card;
