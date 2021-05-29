import React, { Component } from "react";

class FormSuccess extends Component {
  render() {
    return (
      <div className="form-content-right">
        <div className="form-success">
          We have received your request! Please, go to your home space.
          <button
            type="button"
            className="back-btn"
            onClick={() => history.push("/profile")}
          >
            Home Space
          </button>
        </div>
      </div>
    );
  }
}

export default FormSuccess;
