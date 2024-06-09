import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { FaEye } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

const News = () => {
  const { id } = useParams();
  const news = useLoaderData();
  const findNews = news.find((aNews) => aNews._id === id);
  console.log(findNews);
  const { details, title, image_url, total_view } = findNews;
  const { img, name, published_date } = findNews.author;
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="col-span-3 border p-4 my-4">
          <p className="text-xs text-gray-400 p-1 italic rounded bg-gray-200 inline">
            Published on: {published_date}
          </p>
          <h3 className="text-2xl my-2 uppercase text-center text-gray-500 italic">
            {title}
          </h3>
          <img className="w-full" src={image_url} alt="" />
          <div className="flex items-center justify-end gap-1 mt-8 p-2 bg-gray-100">
            <img className="w-10 rounded-full" src={img} alt="" />
            <div className="flex flex-col">
              <p className="text-xs italic text-gray-400">Written by -</p>
              <p className="italic text-gray-500">{name}</p>
            </div>
          </div>

          <p className="mt-4 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left text-justify">
            {details}
          </p>
          <div className="flex justify-end mt-2">
            <p className="flex gap-2 items-center text-gray-400 bg-gray-200 px-2 rounded">
              <FaEye /> {total_view} +
            </p>
          </div>
          <hr className="my-8" />
          <button onClick={handleGoBack} className="btn mx-auto rounded-none">
            <IoArrowBack />
          </button>
        </div>
        <div className="md:col-span-1 md:sticky md:top-20 md:self-start">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default News;
