import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput";
import Output from "./Output";

class App extends Component {
  state = {
    units: [
      { name: "centimeters", number: "0", abbr: "cm" },
      { name: "meters", number: "0", abbr: "m" },
      { name: "inches", number: "0", abbr: "in" },
      { name: "feet", number: "0", abbr: "ft" },
    ],
    unitSelected: { value: "m" },
    inputField: { value: "0" },
  };

  conversionFactors = (unit) => {
    switch (unit) {
      case "m":
        return [100, 1, 39.37, 3.28];
      case "cm":
        return [1, 0.01, 0.39, 0.033];
      case "in":
        return [2.54, 0.0254, 1, 0.083];
      case "ft":
        return [30.48, 0.305, 12, 1];
    }
  };

  /*trigger by the change of the input field */
  unitConversion = (event) => {
    const setUnit = this.conversionFactors(this.state.unitSelected.value);

    this.setState({
      units: [
        {
          name: "centimeters",
          number: (event.target.value * setUnit[0]).toFixed(2),
          abbr: "cm",
        },
        {
          name: "meters",
          number: (event.target.value * setUnit[1]).toFixed(2),
          abbr: "m",
        },
        {
          name: "inches",
          number: (event.target.value * setUnit[2]).toFixed(2),
          abbr: "in",
        },
        {
          name: "feet",
          number: (event.target.value * setUnit[3]).toFixed(2),
          abbr: "ft",
        },
      ],
      inputField: { value: event.target.value },
    });
  };

  // trigger by change on the dropbox
  unitSelected = (event) => {
    const setUnit = this.conversionFactors(event.target.value);
    this.setState({
      units: [
        {
          name: "centimeters",
          number: (this.state.inputField.value * setUnit[0]).toFixed(2),
          abbr: "cm",
        },
        {
          name: "meters",
          number: (this.state.inputField.value * setUnit[1]).toFixed(2),
          abbr: "m",
        },
        {
          name: "inches",
          number: (this.state.inputField.value * setUnit[2]).toFixed(2),
          abbr: "in",
        },
        {
          name: "feet",
          number: (this.state.inputField.value * setUnit[3]).toFixed(2),
          abbr: "ft",
        },
      ],
      unitSelected: { value: event.target.value },
    });
  };

  render() {
    // let numberInInput = parseInt(this.state.inputField.value).toFixed(2);
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
          if (this.state.unitSelected.value != unit.abbr) {
            return <Output name={unit.name} number={unit.number} />;
          }
        })}
      </>
    );
  }
}
export default App;
