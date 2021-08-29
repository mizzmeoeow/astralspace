import CategorySpace from "../../body/space/categorySpace";
import ConnectFooter from "../../footer/connectFooter";
import PerformingHeader from "../../headernavbar/catHeaders/performingHeader";

export default function PerformingArts(props) {
  const user = props.user;

  return (
    <div>
      <PerformingHeader />
      <div className="home">
        <CategorySpace user={user} />
        <ConnectFooter />
      </div>
    </div>
  );
}
