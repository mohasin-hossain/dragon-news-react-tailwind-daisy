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
    <div className="border p-4 shadow-lg">
      <h1 className="text-2xl mb-4 border p-2 text-center">All Categories</h1>
      {categories.map((category) => (
        <Link
          key={category.id}
          className="block text-base font-semibold p-2 hover:bg-base-300"
          to={`/category/${category.id}`}
        >
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
