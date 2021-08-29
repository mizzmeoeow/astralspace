import ArcHeader from "../../headernavbar/catHeaders/arcHeader";
import CategorySpace from "../../body/space/categorySpace";
import ConnectFooter from "../../footer/connectFooter";

export default function Architecture(props) {
  const user = props.user;

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
