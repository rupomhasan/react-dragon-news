import BreakingNews from "./BreackingNews/BreakingNews";
import Header from "./Header/Header";
import LeftSideNav from "./LeftSideNav/LeftSideNav";
import Navbar from "./Navbar/Navbar";
import RightSideNav from "./RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-6 border-2 p-10">
        <div className=" border-2 border-red-500">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className=" md:col-span-2 border-2 border-red-500">
          <h2>News is Here</h2>
        </div>
        <div className=" border-2 border-red-500">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
