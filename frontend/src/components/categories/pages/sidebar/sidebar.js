import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar(props) {
  const [cats, setCats] = useState([]);
  const user = props.user;

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="">
      <div className="">
        <ul className="category-nav nav-connect">
          {cats.map((c, index) => (
            <Link
              to={`/${c.name}`}
              user={user}
              className="category"
              key={"mykey" + index}
            >
              {c.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
