import CategorySpace from "../../body/space/categorySpace";
import ConnectFooter from "../../footer/connectFooter";
import SculptingHeader from "../../headernavbar/catHeaders/sculptingHeader";

export default function Sculpting(props) {
  const user = props.user;

  return (
    <div>
      <SculptingHeader />
      <div className="home">
        <CategorySpace user={user} />
        <ConnectFooter />
      </div>
    </div>
  );
}
