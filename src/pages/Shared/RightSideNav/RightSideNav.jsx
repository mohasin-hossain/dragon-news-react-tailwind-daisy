import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";

const RightSideNav = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {!user && (
        <div className="p-4 space-y-3">
          <h2 className="text-2xl">Login With</h2>
          <button className="btn btn-outline mb-2">
            <FaGoogle />
            Login With Google
          </button>
          <button className="btn btn-outline">
            <FaGithub />
            Login With GitHub
          </button>
        </div>
      )}

      <div className="p-4">
        <h2 className="text-2xl mb-2">Find Us On</h2>
        <a className="flex items-center p-4 border rounded-t-lg" href="">
          <FaFacebook className="mr-2" />
          Facebook
        </a>
        <a className="flex items-center p-4 border border-x" href="">
          <FaTwitter className="mr-2" />
          Twitter
        </a>
        <a className="flex items-center p-4 border rounded-b-lg" href="">
          <FaInstagram className="mr-2" />
          Instagram
        </a>
      </div>

      <div className="p-4">
        <h2 className="text-2xl mb-2">Q-Zone</h2>
        <img src={qzone1} alt="" />
        <img src={qzone2} alt="" />
        <img src={qzone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
