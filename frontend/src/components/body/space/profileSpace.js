import React, { Component } from "react";
import background from "../../../images/space.jpg";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../../actions/actionAuth";

class ProfileSpace extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render() {
    const { user } = this.props.auth;
    return (
      <div
        className="background"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <button onClick={this.onLogoutClick} className="login-btn">
          Logout
        </button>
      </div>
    );
  }
}

ProfileSpace.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(ProfileSpace);
