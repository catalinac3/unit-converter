import React from "react";

const userInput = (props) => {
  return (
    <div>
      <form>
        <label>Lenght</label>
        <input type="text" onChange={props.changed}></input>
        <select onChange={props.unitChanged}>
          <option value="cm">cm</option>
          <option selected value="m">m</option>
          <option value="in">in</option>
          <option value="ft">ft</option>
        </select>
      </form>
    </div>
  );
};
export default userInput;
