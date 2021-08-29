import CategorySpace from "../../body/space/categorySpace";
import ConnectFooter from "../../footer/connectFooter";
import PaintingHeader from "../../headernavbar/catHeaders/paintingHeader";

export default function Painting(props) {
  const user = props.user;

  return (
    <div>
      <PaintingHeader />
      <div className="home">
        <CategorySpace user={user} />
        <ConnectFooter />
      </div>
    </div>
  );
}
