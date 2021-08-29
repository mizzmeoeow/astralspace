import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser, setCurrentUser } from "../../actions/actionAuth";

import ProfileSpace from "../body/space/profileSpace";
import ProfileFooter from "../footer/profileFooter";
import ProfileNavbar from "../headernavbar/profileNavbar";
import TypingEffect from "new-react-typing-effect";

class Dashboard extends Component {
  state = {
    username: "",
  };

  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      <div className="profile-page header">
        <div>
          <TypingEffect
            messages={[
              "You have arrived to AstralServers.",
              "You have a few decisions to make today, as always.",
              "Please, check to make sure you have not left anything upon exiting.",
              "Have a great stay. (^-^)/",
            ]}
            cursor="|"
            textRenderer={(text, renderedCursor, atIndex) => {
              return atIndex % 1 === 0 ? (
                <p className="sign-in-page profile" style={{ color: "white" }}>
                  {text}
                  {renderedCursor}
                </p>
              ) : (
                ""
              );
            }}
            cursorRenderer={(cursor) => (
              <span style={{ color: "white" }}>{cursor}</span>
            )}
            options={{
              text: {
                charactersPerSecond: 10,
                fullTextDelayMS: 5000,
              },
            }}
          />
          <h4 className="greeting">
            <b>Welcome back,</b> {user.username}
          </h4>
        </div>
        <button onClick={this.onLogoutClick} className="login-btn logout-btn">
          Logout
        </button>
        <ProfileNavbar user={user} />
        <ProfileSpace user={user} />
        <ProfileFooter />
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, setCurrentUser })(
  Dashboard
);
