import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div>
      <div className="flex justify-center">
        <img src={logo} alt="Logo" />
      </div>
      <div className="text-center font-medium ">
        <p className="text-[#706F6F] text-lg leading-8">
          Journalism Witout Fear of Favour
        </p>
        <p className="leading-8 text-xl ">
          {" "}
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Header;
