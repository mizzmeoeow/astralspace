import React, { useEffect, useState } from "react";
import background from "../../../images/space.jpg";
import Posts from "../../categories/pages/posts/posts";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../actions/actionAuth";
import { useLocation } from "react-router";

function ConnectSpace(props) {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();
  const user = props.user;

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("posts/" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  console.log(user);

  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="posts">
        <Posts posts={posts} user={user} key={posts.uniqueID} search={search} />
      </div>
    </div>
  );
}

ConnectSpace.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(ConnectSpace);
