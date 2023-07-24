import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./Machine.jpg";

function VendingMachine() {
  return (
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}>
      <Message>
        <h1>Welcom to the best vending machine.<br></br> What are you in the mood for?</h1>
      </Message>
      <Message>
        <h1><Link to="/soda">cream soda</Link></h1>
        <h1><Link to="/chips">bbq chips</Link></h1>
        <h1><Link to="/sardines">mac and cheese</Link></h1>
      </Message>
    </div>
  );
}

export default VendingMachine;
