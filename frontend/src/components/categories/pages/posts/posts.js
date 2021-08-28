import Post from "./post";

export default function Posts({ posts }) {
  return (
    <div className="posts" key={posts}>
      {posts.map((p, index) => (
        <Post post={p} key={"mykey" + index} />
      ))}
    </div>
  );
}
