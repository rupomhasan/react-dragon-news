import { Link, NavLink } from "react-router-dom";
import userDefaultProfile from "../../../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../../../Component/Provider/AuthProvider";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);

  const hadlleLogout = () => {
    userLogout();
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="">About</NavLink>
      </li>
      <li>
        <NavLink to="">Career</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="px-1 flex gap-8">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <label
          tabIndex={0}
          className="btn btn-ghost btn-sm mr-3 btn-circle avatar"
        >
          <div className="">
            <img alt="User Img" src={userDefaultProfile} />
          </div>
        </label>

        <div>
          {user ? (
            <Link to="/">
              <button
                onClick={hadlleLogout}
                className="btn btn-sm bg-black text-white md:px-5 hover:bg-black"
              >
                LogOut
              </button>
            </Link>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm bg-black text-white md:px-5 hover:bg-black">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
