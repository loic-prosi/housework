import React from "react";

const Card = props => {
  let { name } = props;

  if (!name || name.length === 0) {
    name = "???";
  }

  return (
    <div className="card">
      <p>{name}</p>
    </div>
  );
};

export default Card;
