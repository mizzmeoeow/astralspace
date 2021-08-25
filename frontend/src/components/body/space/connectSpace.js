import React, { useEffect, useState } from "react";
import background from "../../../images/space.jpg";
import Posts from "../../categories/pages/posts/posts";
import axios from "axios";
import { useLocation } from "react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logoutUser } from "../../../actions/actionAuth";

function ConnectSpace() {
  const [posts, setPosts] = useState([]);
  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
      setFilteredData(res.data);
    };
    fetchPosts();
  }, [search]);
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
