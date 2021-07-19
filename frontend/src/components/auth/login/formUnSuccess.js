import React, { Component } from "react";
import UnsuccessClouds from "../../body/clouds/unsuccessClouds";

class FormSuccess extends Component {
  render() {
    return (
      <div className="form-content-right">
        <div className="form-success">
          <UnsuccessClouds />
        </div>
      </div>
    );
  }
}

export default FormSuccess;
