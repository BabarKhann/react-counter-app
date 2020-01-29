import React from "react";

const Buttons = props => {
  return (
    <div>
      <button onClick={props.inc}>Inc +</button>
      <button onClick={props.dec}>Dec -</button>
    </div>
  );
};

export default Buttons;
