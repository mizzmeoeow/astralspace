import React, { Component } from "react";
import background from "../../../images/space.jpg";
import Write from "../../categories/pages/write/write";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setCurrentUser } from "../../../actions/actionAuth";

class CategorySpace extends Component {
  render() {
    const { user } = this.props.auth;

    return (
      <div
        className="background"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {" "}
        <Write user={user} />
      </div>
    );
  }
}

CategorySpace.propTypes = {
  auth: PropTypes.object.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setCurrentUser })(CategorySpace);
