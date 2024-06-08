import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-8">
        <div className="border">
            <LeftSideNav></LeftSideNav>
        </div>
        <div className="border col-span-2">
            <h1>News Coming Soon..</h1>
        </div>
        <div className="border">
            <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
