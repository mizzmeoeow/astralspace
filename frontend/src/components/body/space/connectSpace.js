import React, { useEffect, useState } from "react";
import background from "../../../images/space.jpg";
import Posts from "../../categories/pages/posts/posts";
import axios from "axios";
import { useLocation } from "react-router";

export default function ConnectSpace() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts");
      setPosts(res.data);
    };
    fetchPosts();
  });
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
