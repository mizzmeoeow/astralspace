import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../hooks/reducerAuth";

export default function ProfileNavbar() {
  const { user } = useContext(Context);
  // const PF = "http://localhost:5000/images/";

  // render() {
  console.log(user);
  return (
    <div className="navbar profile-nav">
      {user ? (
        <img className="topImg" src={user.profilePic} alt="" />
      ) : (
        <h1>not set up for some reason</h1>
      )}
      <a href="/connect" className="navbar-links profile-links">
        Connect
      </a>
    </div>
  );
}
