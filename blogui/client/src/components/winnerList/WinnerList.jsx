import axios from "axios";
import React, { useEffect, useState } from "react";
import WinnerItem from "./WinnerItem";

const WinnerList = () => {
  const [winnersData, setWinnersData] = useState([]);

  useEffect(() => {
    const getWinner = async () => {
      const res = await axios.get("/winners/");
      console.log(res);
 
      setWinnersData(res.data);
    };
    getWinner();
  }, []);

  return (
    <div >
      <WinnerItem winnersData={winnersData} />
    </div>
  );
};

export default WinnerList;
