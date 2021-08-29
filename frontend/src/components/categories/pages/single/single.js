import PostSpace from "../../../body/space/postSpace";
import ConnectFooter from "../../../footer/connectFooter";
import PostHeader from "../../../headernavbar/postHeader";

export default function Single(props) {
  const post = props.post;

  return (
    <div className="single">
      <PostHeader />
      <PostSpace post={post} />

      <ConnectFooter />
    </div>
  );
}
