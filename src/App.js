import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput";
import Output from "./Output";

class App extends Component {
  state = {
    units: [
      { name: "centimeters", number: "0" },
      { name: "meters", number: "0" },
      { name: "inches", number: "0" },
      { name: "feet", number: "0" },
    ],
    unitSelected: {value: 'm'}
  };
 

  /*trigger by the change of the input field */
  unitConversion = (event) => {
    // sets the conversion parameters depending on the drop box selected unit 
    let setUnit;
    switch (this.state.unitSelected.value) {
      case "m":
        setUnit = [100, 1, 39.37,3.28];
        break
      case "cm":
        setUnit = [1, 0.01, 0.39, 0.033];
        break
      case "in":
        setUnit = [2.54, 0.0254, 1, 0.083];
        break
      case "ft":
        setUnit = [30.48, 0.305, 12, 1];
        break
    }
 
    this.setState({
      units: [
        { name: "centimeters", number: event.target.value * setUnit[0] },
        { name: "meters", number: event.target.value * setUnit[1] },
        { name: "inches", number: event.target.value * setUnit[2] },
        { name: "feet", number: event.target.value * setUnit[3] },
      ],
    });
  };
  
  // trigger by change on the dropbox
  unitSelected= (event) => {
    this.setState({unitSelected: {value: event.target.value}}, () =>{console.log (this.state)})
  }

  render() {
    return (
      <>
        <h1>Length Unit Converter</h1>

        <div className="input-group">
          <UserInput
            unitChanged={this.unitSelected}
            changed={this.unitConversion}
            // changed={this.unitConversion.bind(this,unit)}
            unit={this.state.units[0].number}
          />
        </div>

        {this.state.units.map((unit) => {
          return <Output name={unit.name} number={unit.number} />;
        })}
      </>
    );
  }
}
export default App;
