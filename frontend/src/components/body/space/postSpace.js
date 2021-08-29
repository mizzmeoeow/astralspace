import React, { Component } from "react";
import background from "../../../images/space.jpg";
import SinglePost from "../../categories/pages/posts/singlePost";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setCurrentUser } from "../../../actions/actionAuth";

class PostSpace extends Component {
  render() {
    const { user } = this.props.auth;
    return (
      <div
        className="background"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        <SinglePost user={user} />
      </div>
    );
  }
}

PostSpace.propTypes = {
  auth: PropTypes.object.isRequired,
  setCurrentUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { setCurrentUser })(PostSpace);
