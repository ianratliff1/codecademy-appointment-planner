import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = (props) => {
  return (
    <div>
      {props.contacts.map((contact, index) => {
        const { name, ...rest } = contact;
        console.log(`key=${index} name=${name} description=${JSON.stringify(rest)}`)
        return <Tile key={index} name={name} description={rest} />
      })}
    </div>
  );
};
