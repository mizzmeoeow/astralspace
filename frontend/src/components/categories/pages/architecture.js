import { useLocation } from "react-router";
import ArcHeader from "../../headernavbar/catHeaders/arcHeader";
import CategorySpace from "../../body/space/categorySpace";
import ConnectFooter from "../../footer/connectFooter";

export default function Architecture() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <ArcHeader />
      <div className="home">
        <CategorySpace />
        {/* <Sidebar /> */}
        <ConnectFooter />
      </div>
    </div>
  );
}
