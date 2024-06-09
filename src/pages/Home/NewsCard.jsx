import { Link } from "react-router-dom";

const NewsCard = ({ news, displayNews }) => {
  const { title, details, image_url, _id, } = news;

  return (
    <div className="card bg-base-100 shadow-xl mb-4">
      <figure>
        <img className="w-full" src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-base">{title}</h2>
        {details.length > 100 ? (
          <p className="text-xs">
            {details.slice(0, 100)} <br />
            <Link className="link link-primary font-bold" to={`/news/${_id}`}>
              Read More...
            </Link>
          </p>
        ) : (
          <p className="text-xs">{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
