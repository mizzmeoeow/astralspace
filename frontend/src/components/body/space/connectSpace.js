import React, { useEffect, useState } from "react";
import background from "../../../images/space.jpg";
import Posts from "../../categories/pages/posts/posts";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../actions/actionAuth";

function ConnectSpace() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const res = await axios.get("posts/" + search);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  // useEffect(() => {
  //   setFilteredPosts(
  //     posts.filter((post) =>
  //       post.title.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }, [search, posts]);

  if (loading) {
    return <p>Loading posts...</p>;
  }
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="posts">
        <Posts posts={posts} key={posts.uniqueID} />
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
