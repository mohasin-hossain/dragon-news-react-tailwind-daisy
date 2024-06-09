import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-8 mt-4">
        <div className="col-span-4 md:col-span-1 md:sticky md:top-20 md:self-start">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-4 md:col-span-2 grid md:grid-cols-2 gap-4">
          {news.map((aNews) => (
            <NewsCard key={aNews._id} news={aNews}></NewsCard>
          ))}
        </div>
        <div className="col-span-4 md:col-span-1 md:sticky md:top-20 md:self-start">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
