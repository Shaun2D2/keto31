import React from 'react';

import '../../sass/Card.scss';

const Card = ({ children, isFlex, style, isGlass }) => (
  <div className={`card ${isFlex ? 'card__flex' : ''} ${isGlass ? 'card__glass' : ''}`} style={style}>
    {children}
  </div>
);

export default Card;
