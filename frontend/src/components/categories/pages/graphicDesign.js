import { useLocation } from "react-router";
import ArcHeader from "../../headernavbar/catHeaders/arcHeader";
import CategorySpace from "../../body/space/categorySpace";
import ConnectFooter from "../../footer/connectFooter";

export default function GraphicDesign(props) {
  const location = useLocation();
  console.log(location);
  const user = props.user;

  console.log(user);
  return (
    <div>
      <ArcHeader />
      <div className="home">
        <CategorySpace user={user} />
        <ConnectFooter />
      </div>
    </div>
  );
}
