
import { useContext } from "react";
import Navbar from "../Home/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Component/Provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const hadleCreateUser = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email , password)
    
        createUser(email, password)
            .then(res => {
            console.log(res)
            })
        .catch(error => {console.log(error)})

        
}

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="card shrink-0 w-full max-w-2xl mx-auto shadow-2xl bg-base-100 my-10 pb-7">
        <div className="my-10">
          <h2 className="text-center font-bold text-2xl">
            Register Your account
          </h2>
        </div>
        <div className="mx-10 h-[2px] bg-gray-200"></div>
        <form onSubmit={hadleCreateUser } className="card-body space-y-4">
          <div className="form-control space-y-2">
            <label className="label">
              <span>Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="w-rull bg-[#f3f3f3] px-5 py-2 rounded-lg"
              required
            />
          </div>
          <div className="form-control space-y-2">
            <label className="label">
              <span>Photo URL</span>
            </label>
            <input
              type="image"
              name="image"
              alt="img url"
              className="w-rull bg-[#f3f3f3] px-5 py-2 rounded-lg"
              required
            />
          </div>
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
          </div>

          <div className="text-xl flex items-center gap-2">
            <input className=" w-5 h-5 rounded-full" type="checkbox" />
            <p>
              Accept
                 <a className="font-bold hover:underline " href="">  Terms & Conditions</a>
            </p>
          </div>
          <div>
            <input
              type="submit"
              value="Register"
              className="btn w-full bg-black hover:bg-black text-white text-xl"
            />
          </div>
        </form>
        <p className="text-center text-lg mb-8">
          Already Have an account?
          <Link
            className="text-red-500 font-semibold hover:underline"
            to="/login"
          >
            Please Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
