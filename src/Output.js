import React from "react";

const Output = (props) => {
  return (
    <div className = "Output">
      <p> {props.name} = {props.number} </p>
    </div>
  );
};
export default Output;