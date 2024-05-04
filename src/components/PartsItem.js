import React from "react";

function PartsItem({ image, name, price }) {
  return (
    <div className="PartsItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ${price} </p>
    </div>
  );
}

export default PartsItem;
