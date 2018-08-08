import React from 'react';

import '../../sass/Card.scss';

const Card = ({ children, isFlex, style }) => (
  <div className={`card ${isFlex ? 'card__flex' : ''}`} style={style}>
    {children}
  </div>
);

export default Card;
