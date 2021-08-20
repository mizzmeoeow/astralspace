import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
    <div className="search-results" key={post.photo}>
      {post.photo && (
        <img className="card__img" src={PF + post.photo} alt="" key={post.id} />
      )}
      <div className="postInfo" key={post.name}>
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat" key={c.id}>
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
        {post.description}
      </p>
    </div>
  );
}
