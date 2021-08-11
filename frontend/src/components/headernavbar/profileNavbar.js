import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../reducers/reducerAuth";

export default function ProfileNavbar() {
  const { user } = useContext(Context);
  const PF = "http://localhost:5000/images/";

  // render() {
  return (
    <div className="navbar profile-nav">
      {user ? (
        <Link to="/settings">
          Click Me
          <img className="topImg" src={PF + user.profilePic} alt="" />
        </Link>
      ) : (
        <h1>not set up for some reason</h1>
      )}
      <a href="/connect" className="navbar-links profile-links">
        Connect
      </a>
      <a href="/settings" className="navbar-links profile-links">
        Settings
      </a>
    </div>
  );
}
