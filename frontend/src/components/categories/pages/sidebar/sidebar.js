import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

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
          {cats.map((c) => (
            <Link to={`/${c.name}`} className="category" key={c.id}>
              {c.name}
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
