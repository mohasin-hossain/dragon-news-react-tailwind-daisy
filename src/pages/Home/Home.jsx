import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const news = useLoaderData();

  const [displayNews, setDisplayNews] = useState(news);

  const handleFilterNews = (id) => {
    if (id === "0") {
      setDisplayNews(news);
    } else {
      const filteredNews = news.filter((aNews) => aNews.category_id === id);
      setDisplayNews(filteredNews);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Dragon News | Capturing the World</title>
      </Helmet>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-8 mt-4">
        <div className="col-span-4 md:col-span-1 md:sticky md:top-20 md:self-start">
          <LeftSideNav handleFilterNews={handleFilterNews}></LeftSideNav>
        </div>
        <div className="col-span-4 md:col-span-2 grid lg:grid-cols-2 gap-4">
          {displayNews.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
        </div>
        <div className="col-span-4 md:col-span-1 md:sticky md:top-20 md:self-start">
          <RightSideNav></RightSideNav>
        </div>
      </div>
      <hr className="my-8" />
    </div>
  );
};

export default Home;
