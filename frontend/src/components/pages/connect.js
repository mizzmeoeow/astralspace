import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser, setCurrentUser } from "../../actions/actionAuth";
import ConnectHeader from "../headernavbar/connectHeader";
import ConnectSpace from "../body/space/connectSpace";
import ConnectFooter from "../footer/connectFooter";
import SearchPage from "../connect/searchPage";

class Connect extends Component {
  state = {
    username: "",
  };
  render() {
    const { user } = this.props.auth;

    return (
      <div className="connect-nav">
        <ConnectHeader />
        <h4 className="greeting">
          <b>Would you like to connect with someone today,</b> {user.username}?
        </h4>
        <SearchPage user={user} />
        <ConnectSpace user={user} />
        <ConnectFooter />
      </div>
    );
  }
}

Connect.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser, setCurrentUser })(
  Connect
);
