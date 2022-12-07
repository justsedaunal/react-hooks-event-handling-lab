// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
  return (
    <button
      onFocus={(e) => {
        console.log("Good");
      }}
      onBlur={(e) => {
        console.log("Hey! Eyes on me!");
      }}
    >
      EyesOnMe
    </button>
  );
}

export default EyesOnMe;
