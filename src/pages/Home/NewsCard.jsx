import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, details, image_url, _id } = news;

  return (
    <div className="card bg-base-100 shadow-xl mb-4">
      <figure>
        <img className="w-full" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)} {"  "}
             <Link className="link link-secondary font-bold" to={`/news/${_id}`}>Read More...</Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
