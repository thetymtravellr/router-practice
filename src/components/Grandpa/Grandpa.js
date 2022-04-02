import React, { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import "./Grandpa.css";

export const RingContext = createContext("Diamond");

const Grandpa = () => {
  const [house, setHouse] = useState(1);

  const ornament = "Diamond Ring";

  const handleBuyAHouse = () => {
    setHouse(house + 1);
  };
  return (
    <RingContext.Provider value='alur ring'>
      <div className="grandpa">
        <h4>Grandpa</h4>
        <button onClick={handleBuyAHouse}>Buy A House</button>
        <p>House: {house}</p>
        <div style={{ display: "flex" }}>
          <Father house={house}></Father>
          <Uncle house={house}></Uncle>
          <Aunty house={house}></Aunty>
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;
