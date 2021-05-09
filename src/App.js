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

  // depending on the unit chooses the needed conversion factors
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

  // set the units list of objects for the state
  settingUnits(setUnit, currentInput) {
    let units = [
      {
        name: "centimeters",
        number: (currentInput * setUnit[0]).toFixed(2),
        abbr: "cm",
      },
      {
        name: "meters",
        number: (currentInput * setUnit[1]).toFixed(2),
        abbr: "m",
      },
      {
        name: "inches",
        number: (currentInput * setUnit[2]).toFixed(2),
        abbr: "in",
      },
      {
        name: "feet",
        number: (currentInput * setUnit[3]).toFixed(2),
        abbr: "ft",
      },
    ];
    return units;
  }

  // trigger by the change of the input field
  unitConversion = (event) => {
    const setUnit = this.conversionFactors(this.state.unitSelected.value);
    const currentInput = event.target.value;

    this.setState({
      units: this.settingUnits(setUnit, currentInput),
      inputField: { value: currentInput },
    });
  };

  // trigger by change on the dropbox
  unitSelected = (event) => {
    const setUnit = this.conversionFactors(event.target.value);
    const currentInput = this.state.inputField.value;
    this.setState({
      units: this.settingUnits(setUnit, currentInput),
      unitSelected: { value: event.target.value },
    });
  };

  render() {
    return (
      <>
        <h1>Length Unit Converter</h1>

        <div className="input-group">
          <UserInput
            unitChanged={this.unitSelected}
            changed={this.unitConversion}
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
