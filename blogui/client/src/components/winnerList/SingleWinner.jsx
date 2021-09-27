import React from "react";
import "./singleWinner.css"

const SingleWinner = ({ win }) => {
  return (
    <div className='winnerItem'>
      <div className="winnername">{win.name}</div>
      <div className="winneremail">{win.email}</div>
      <div className="winnerdesc"> {win.desc} </div>
    </div>
  );
};

export default SingleWinner;
 