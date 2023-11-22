import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h2 className="font-semibold text-2xl mb-8">All Categories</h2>
      <div className="space-y-4">
        {categories.map((category) => (
          <Link
            className=" block btn btn-sm btn-ghost w-full text-xl text-[#9f9f9f] text-left hover:text-black hover:text-center "
            key={category.id}
            to={`/category/${category.id}`}
          >
            {category.name}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
