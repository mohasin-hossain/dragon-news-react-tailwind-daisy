import { Link } from "react-router-dom";

const BreakingNewsItem = ({ bNews }) => {
  return (
    <Link
      className="border-r-2 border-primary p-2 mx-2"
      to={`/news/${bNews._id}`}
    >
      {bNews.title}
    </Link>
  );
};

export default BreakingNewsItem;
