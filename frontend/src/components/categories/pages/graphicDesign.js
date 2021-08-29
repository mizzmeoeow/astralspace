import CategorySpace from "../../body/space/categorySpace";
import ConnectFooter from "../../footer/connectFooter";
import GraphicDesignHeader from "../../headernavbar/catHeaders/gdHeader";

export default function GraphicDesign(props) {
  const user = props.user;

  return (
    <div>
      <GraphicDesignHeader />
      <div className="home">
        <CategorySpace user={user} />
        <ConnectFooter />
      </div>
    </div>
  );
}
