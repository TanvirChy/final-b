import React from "react";
import SingleWinner from "./SingleWinner";
import "./winneritem.css";

const WinnerItem = ({ winnersData }) => {
  return (
    <>
      <p className="itemP">They are winners:</p>
      <div className="itemContainer">
        {winnersData.map((item) => (
          <SingleWinner win={item} key={item._id} />
        ))}
      </div>
    </>
  ); 
};

export default WinnerItem;
