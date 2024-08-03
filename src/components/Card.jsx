// This card is going to take in as a prop, the Children. Children is what we use for whatever I wrap
// For example, if I want to pass in a h1 into the Card component, I wrap the h1 in the card.
// The children will be displayed in the return statement.

import React from 'react'

// I have destructured the prop. I am also adding bg with a default color as a prop so that I can change the background of each card however I want. 
const Card = ({ children, bg = 'bg-gray-100' }) => {
  return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
};
export default Card;