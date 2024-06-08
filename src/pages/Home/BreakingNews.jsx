import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-secondary">Breaking News</button>
      <Marquee pauseOnHover={true} speed={100}>
        <Link className="mr-4" to="/"> I can be a React component, multiple React components, or just some
        text.</Link>
        <Link to="/">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, laborum.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
