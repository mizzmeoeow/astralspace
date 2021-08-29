import CategorySpace from "../../body/space/categorySpace";
import ConnectFooter from "../../footer/connectFooter";
import MusicHeader from "../../headernavbar/catHeaders/musicHeader";

export default function Music(props) {
  const user = props.user;

  return (
    <div>
      <MusicHeader />
      <div className="home">
        <CategorySpace user={user} />
        <ConnectFooter />
      </div>
    </div>
  );
}
