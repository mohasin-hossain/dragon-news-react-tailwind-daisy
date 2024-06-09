import { Helmet } from "react-helmet-async";
import BreakingNews from "../Home/BreakingNews";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Career = () => {
  return (
    <div>
      <Helmet>
        <title>Career with us</title>
      </Helmet>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <h1 className="text-2xl mt-8 text-center text-gray-600">
        Join The Dragon News Team
      </h1>
      <p className="irst-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left text-justify my-4">
        Are you passionate about journalism and eager to make an impact in the
        world of news? The Dragon News is looking for talented and dedicated
        individuals to join our dynamic team. Whether you’re an experienced
        journalist, a budding reporter, or a skilled editor, we offer a platform
        for you to showcase your talents and contribute to our mission of
        delivering high-quality news to a global audience. At The Dragon News,
        we believe in the power of storytelling and the importance of accurate,
        insightful journalism. As a member of our team, you will have the
        opportunity to work on diverse and compelling stories from around the
        world, collaborating with a network of professionals who share your
        commitment to excellence and integrity.
      </p>
      <h3 className="text-white font-semibold text-center uppercase bg-red-600">
        Unfortunately no job openings are available at the moment. Please try
        again later.
      </h3>
    </div>
  );
};

export default Career;
