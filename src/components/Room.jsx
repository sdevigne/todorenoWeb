import React, { Component } from "react";
import { useSelector } from "react-redux";

const Room = () => {

  const place = useSelector((state) => state.placeReducer);
  const room = useSelector((state) => state.roomReducer);
  

  return ( 
    <div>
      {place.label} &gt; {room.label}
    </div>
  );
}
 
export default Room;


