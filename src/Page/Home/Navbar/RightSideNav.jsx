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
import bg from "../../../assets/bg.png";

const RightSideNav = () => {
  return (
    <div className="space-y-8">
      {/* Login Container */}
      <div>
        <h3 className="font-semibold text-2xl mb-4">Login With</h3>
        <div className="space-y-2">
          <button className="flex btn btn-sm text-lg w-full">
            <FaGoogle /> Login withFacebook
          </button>
          <button className="btn btn-sm text-lg w-full">
            <FaGithub /> Login withFacebook
          </button>
        </div>
      </div>
      {/* Find Us container */}

      <div>
        <h3 className="font-semibold text-2xl mb-4">Find Us On</h3>
        <div className="text-[#706f6f]">
          <a
            href=""
            className="flex items-center py-4 px-3 text-lg font-medium gap-2 border rounded-t w-full"
          >
            <FaFacebook className="text-lg" /> Facebook
          </a>
          <a
            href=""
            className="flex items-center gap-2 px-3 py-4 w-full font-medium text-lg border-x"
          >
            <FaTwitter className="text-xl" />
            Twitter
          </a>
          <a
            href=""
            className="flex items-center py-4 px-3 text-lg font-medium gap-2 border rounded-b w-full"
          >
            <FaInstagram className="text-lg" /> Instagram
          </a>
        </div>
      </div>

      {/* Q Zone */}
      <div className="bg-gray-100 px-1 py-3">
        <h3 className="font-semibold text-2xl mb-4 px-5 ">Q-Zone</h3>
        <div>
          <img src={qzone1} />
          <img src={qzone3} />
          <img src={qzone2} />
        </div>
      </div>
      {/* Discoverd Container */}

      <div
        style={{ backgroundImage: `${bg}` }}
        className={`text-center bg-${bg}  space-y-7 py-5 px-3`}
      >
        <h2 className="font-bold text-3xl">Create an Amazing Newspaper</h2>
        <p>
          Discoverd thousands of options,easy to customize layoutes, one click
          to import demo and much more.
        </p>
        <button className="btn text-white font-bold text-xl">Learn More</button>
      </div>
    </div>
  );
};

export default RightSideNav;
