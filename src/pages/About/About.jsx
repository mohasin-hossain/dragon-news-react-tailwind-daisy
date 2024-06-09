import { Helmet } from "react-helmet-async";
import BreakingNews from "../Home/BreakingNews";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <h1 className="text-2xl mt-8 text-center text-gray-600">About US</h1>
      <p className="irst-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left text-justify my-4">
        Founded on the principles of integrity, objectivity, and excellence, The
        Dragon News has quickly become a trusted name in the news industry. Our
        dedicated team of experienced journalists, editors, and correspondents
        work tirelessly to bring you the most relevant and up-to-date
        information, ensuring that you are always in the know. We understand the
        importance of reliable news in today's fast-paced and ever-changing
        world. That's why we strive to provide a diverse range of content,
        covering everything from breaking news and politics to entertainment,
        sports, technology, and lifestyle. Our goal is to offer a holistic view
        of the world, giving our readers the tools they need to make informed
        decisions and stay ahead of the curve.
      </p>
      <h1 className="text-2xl text-center text-gray-600">Our Coverage</h1>
      <p className="irst-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900 first-letter:mr-3 first-letter:float-left text-justify my-4">
        Our Coverage At The Dragon News, we believe that news should be
        accessible to everyone. Our user-friendly website is designed to cater
        to readers of all ages and backgrounds, offering a seamless browsing
        experience across all devices. Whether you are at home, at work, or on
        the go, you can count on us to deliver the news that matters most to
        you. Our global network of correspondents ensures that we have eyes and
        ears on the ground in all major regions. From the bustling streets of
        New York and London to the remote villages of Africa and Asia, we bring
        you stories that matter, told by people who understand the local
        context. This extensive coverage allows us to provide in-depth analysis
        and unique perspectives on the issues that affect us all.
      </p>
      <hr className="my-8" />
    </div>
  );
};

export default About;
