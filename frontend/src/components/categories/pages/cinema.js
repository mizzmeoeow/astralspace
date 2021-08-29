import CategorySpace from "../../body/space/categorySpace";
import ConnectFooter from "../../footer/connectFooter";
import CinemaHeader from "../../headernavbar/catHeaders/cinemaHeader";

export default function Cinema(props) {
  const user = props.user;

  return (
    <div>
      <CinemaHeader />
      <div className="home">
        <CategorySpace user={user} />
        <ConnectFooter />
      </div>
    </div>
  );
}
