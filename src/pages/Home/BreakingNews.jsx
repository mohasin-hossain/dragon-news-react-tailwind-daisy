import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BreakingNewsItem from "./BreakingNewsItem";

const BreakingNews = () => {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => setBreakingNews(data));
  }, []);

  return (
    <div className="flex my-4">
      <button className="btn rounded-none tracking-widest btn-primary italic uppercase">
        Breaking News
      </button>
      <Marquee
        className="border border-x-0 border-primary bg-base-200 font-semibold"
        pauseOnHover={true}
        speed={100}
      >
        {breakingNews.map((bNews) => (
          <BreakingNewsItem key={bNews._id} bNews={bNews}></BreakingNewsItem>
        ))}
      </Marquee>
    </div>
  );
};

export default BreakingNews;
