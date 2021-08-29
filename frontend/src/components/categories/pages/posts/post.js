import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  return (
    <div className="search-results">
      {post.photo && (
        <img className="card__img" src={post.photo} alt="" key={post.id} />
      )}
      <div className="postInfo" key={post.name}>
        <div className="postCats">
          {post.categories.map((c, index) => (
            <span className="postCat" key={"mykey" + index}>
              {c.name}
            </span>
          ))}
        </div>
        <Link to={`post/${post._id}`} className="cat-link" key={post.title}>
          <span className="postTitle" key={post.title}>
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="postDate" key={post.createdAt}>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc" key={post.desc}>
        {post.body}
      </p>
    </div>
  );
}
