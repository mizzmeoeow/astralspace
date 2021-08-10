import Post from "./post";

export default function Posts({ posts }) {
  return (
    <div className="posts" key={posts}>
      {posts.map((p) => (
        <Post post={p} key={p.uniqueID} />
      ))}
    </div>
  );
}
