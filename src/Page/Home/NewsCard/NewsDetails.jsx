import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Header/Header";
import RightSideNav from "../Navbar/RightSideNav";
import { FaArrowLeftLong } from "react-icons/fa6";
import Navbar from "../Navbar/Navbar";

const NewsDetails = () => {
  const { id } = useParams();
  const News = useLoaderData();

  const _News = News.find((singleNews) => singleNews._id === id);
  const { image_url, details, title } = _News;
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid grid-cols-4 mt-12 gap-10">
        <div className="col-span-3">
          <h2 className="text-2xl mb-5 font-semibold leading-7">Dragon News</h2>
          <div className="p-5 border rounded-lg">
            <div>
              <img src={image_url} alt="" />
              <p className="font-bold text-2xl leading-12 mt-6 mb-3">{title}</p>
            </div>
            <p className="leading-7">{details}</p>
            <button className="btn  btn-sm text-lg text-white bg-red-600 hover:bg-red-800 my-4">
              <FaArrowLeftLong />
              All News in this category
            </button>
          </div>
        </div>
        <RightSideNav />
      </div>
    </div>
  );
};

export default NewsDetails;
