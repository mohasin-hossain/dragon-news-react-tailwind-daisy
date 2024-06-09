import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const LeftSideNav = ({ handleFilterNews }) => {
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
        <li
          key={category.id}
          onClick={() => handleFilterNews(category.id)}
          className="block cursor-pointer text-base font-semibold p-2 hover:bg-base-300"
        >
          {category.name}
        </li>
      ))}
    </div>
  );
};

export default LeftSideNav;

LeftSideNav.propTypes = {
  handleFilterNews: PropTypes.func.isRequired,
};
