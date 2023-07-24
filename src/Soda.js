import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import sodaImg from "./Cream.png";
import "./Soda.css";

function Soda() {
  return (
    <div className="Soda">
      <img src={sodaImg} alt="coca cola can" />
      <Message>
        <h1>Here is the best soda in the world</h1>
        <h1><Link to="/">Return</Link></h1>
      </Message>
      <img src={sodaImg} alt="coca cola can" />
    </div>
  );
}

export default Soda;
