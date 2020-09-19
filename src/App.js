import React from "react";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

import "./App.css";

class App extends React.Component {
  increment = () => {
    this.props.dispatch({ type: "INCREMENT" });
  };

  decrement = () => {
    this.props.dispatch({ type: "DECREMENT" });
  };

  reset = () => {
    this.props.dispatch({ type: "RESET" });
  };

  render() {
    return (
      <div className="counter">
        <h2>Counter</h2>
        <div>
          <Button
            className="Button"
            variant="outlined"
            color="primary"
            onClick={this.decrement}
          >
            &ndash;
          </Button>
          <span className="count">{this.props.count} </span>
          <Button
            className="Button"
            variant="outlined"
            color="primary"
            onClick={this.increment}
          >
            {" "}
            +
          </Button>
        </div>

        <div className = 'Reset_button'>
          {" "}
          <Button
            className="Button"
            variant="outlined"
            color="secondary"
            onClick={this.reset}
          >
            reset
          </Button>{" "}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  count: state.count,
});
export default connect(mapStateToProps)(App);
