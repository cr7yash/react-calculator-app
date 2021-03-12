import React, { Component } from "react";
import "./App.css";
import { Button } from "./component/Button/Button";
import { Input } from "./component/Input/Input";
import { ClearButton } from "./component/ClearButton/ClearButton";
import { CorrectionButton } from "./component/CorrectionButton/CorrectionButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  handleEqual = () => {
    this.setState({ input: eval(this.state.input) });
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.addToInput}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.addToInput}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.addToInput}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <Button handleClick={() => this.handleEqual()}> =</Button>
            <Button handleClick={this.addToInput}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={() => this.setState({ input: "" })}>
              Clear
            </ClearButton>
            <CorrectionButton
              handleCorrection={() =>
                this.setState({ input: this.state.input.slice(0, -1) })
              }
            >
              C
            </CorrectionButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;