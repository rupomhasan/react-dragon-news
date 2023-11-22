import PropTypes from "prop-types";
import { CiBookmark, CiShare2 } from "react-icons/ci";

const NewsAurthor = ({ author }) => {
  const { published_date, name, img } = author;

  return (
    <div className= "flex  items-center justify-between px-3 rounded py-2 bg-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 ">
          <img className="rounded-full" src={img} alt="aurthor" />
        </div>
        <div>
          <p className="font-semibold leading-6">{name}</p>
          <p className="text-sm leading-6">{published_date}</p>
        </div>
      </div>
      <div className="flex text-xl gap-3">
        <CiBookmark></CiBookmark>
        <CiShare2></CiShare2>
      </div>
    </div>
  );
};

NewsAurthor.propTypes = {
  author: PropTypes.object,
};
export default NewsAurthor;
