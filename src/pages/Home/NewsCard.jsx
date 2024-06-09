import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const NewsCard = ({ news, displayNews }) => {
  const { title, details, image_url, _id, total_view } = news;
  const rating = news.rating.number;

  return (
    <div className="border p-2">
      <h3 className="text-base text-center my-2 text-gray-700 font-semibold">
        {title}
      </h3>
      <img className="w-full" src={image_url} alt="" />
      {details.length > 100 ? (
        <p className="text-xs mt-4 text-gray-500 text-justify">
          {details.slice(0, 100)} <br />
          <Link className="link link-primary font-bold" to={`/news/${_id}`}>
            Read More...
          </Link>
        </p>
      ) : (
        <p className="text-xs mt-4">{details}</p>
      )}
      <hr className="my-2" />
      <div className="flex justify-between">
        <Rating style={{ maxWidth: 50 }} value={rating} readOnly />
        <p className="flex text-xs gap-2 items-center text-gray-400 bg-gray-200 px-2 rounded">
          <FaEye /> {total_view} +
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
