import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

BreakingNewsItem.propTypes = {
  bNews: PropTypes.object.isRequired,
};
