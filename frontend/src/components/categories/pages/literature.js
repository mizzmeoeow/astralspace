import { useLocation } from "react-router";
import CategorySpace from "../../body/space/categorySpace";
import ConnectFooter from "../../footer/connectFooter";
import LiteratureHeader from "../../headernavbar/catHeaders/literatureHeader";

export default function Literature(props) {
  const user = props.user;

  return (
    <div>
      <LiteratureHeader />
      <div className="home">
        <CategorySpace user={user} />
        <ConnectFooter />
      </div>
    </div>
  );
}
