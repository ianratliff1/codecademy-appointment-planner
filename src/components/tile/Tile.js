import React from "react";

export const Tile = (props) => {
  const fields = Object.values(props.description)
  // console.log(fields);
  return (
    <div className="tile-container">
      <p className="tile-title">{props.name}</p>
      {fields.map((field, index) => {
        return <p key={index} className="tile">{field}</p>
      })}
    </div>
  );
};

