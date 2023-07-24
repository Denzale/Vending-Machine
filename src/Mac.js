import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Mac.css";

function Mac() {
  return (
    <div
      className="Mac"
      style={{
        backgroundImage:
          "url(https://giphy.com/gifs/moodman-wap-macaroni-in-a-pot-L3QfoRADDSz7PId3CE)"
      }}>
      <Message>
        <h1>Cheesy Goodness</h1>
        <h1><Link to="/">go back</Link></h1>
      </Message>
    </div>
  );
}

export default Mac;
