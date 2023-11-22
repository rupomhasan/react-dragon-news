import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Component/Provider/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  console.log(location);

  const handleLoginUser = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    loginUser(email, password)
      .then((res) => {
        console.log(res);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-2 md-5">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div className="card shrink-0 w-full max-w-2xl mx-auto shadow-2xl bg-base-100 my-10 pb-7">
        <div className="my-10">
          <h2 className="text-center font-bold text-2xl">Login Your account</h2>
        </div>
        <div className="mx-10 h-[2px] bg-gray-200"></div>
        <form onSubmit={handleLoginUser} className="card-body space-y-4">
          <div className="form-control space-y-2">
            <label className="label">
              <span>Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="w-rull bg-[#f3f3f3] px-5 py-2 rounded-lg"
              required
            />
          </div>
          <div className="form-control space-y-2">
            <label className="label">
              <span>Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="w-rull bg-[#f3f3f3] px-5 py-2 rounded-lg"
              required
            />
            <label className="label">
              <a href="#" className=" link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div>
            <input
              type="submit"
              value="Login"
              className="btn w-full bg-black hover:bg-black text-white text-xl"
            />
          </div>
        </form>
        <p className="text-center text-lg mb-8">
          Don't Have An Account ?
          <Link
            className="text-red-500 font-semibold hover:underline"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
