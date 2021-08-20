import PostSpace from "../../../body/space/postSpace";
import ConnectFooter from "../../../footer/connectFooter";
import SinglePost from "../posts/singlePost";
import PostHeader from "../../../headernavbar/postHeader";

export default function Single() {
  return (
    <div className="single">
      <PostHeader />
      <SinglePost />
      <PostSpace />

      <ConnectFooter />
    </div>
  );
}
