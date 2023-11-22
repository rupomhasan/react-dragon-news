import PropTypes from "prop-types";
import NewsAurthor from "./NewsAurthor";
import { Link } from "react-router-dom";
import Rating from "react-rating";
import { CiStar } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa6";

const NewsCard = ({ News }) => {
  const { title, author, rating, details, total_view, image_url, _id } = News;

  return (
    <div className="mb-10 border rounded">
      <div>
        <NewsAurthor author={author}></NewsAurthor>
      </div>
      <div className="m-3 ">
        <h1 className="m-5 text-xl font-bold">{title}</h1>
        <div className="m-5">
          <img src={image_url} alt="" />
        </div>
        <p className="leading-6 px-2 ">
          {details.slice(0, 250)}.{" "}
          <Link className="text-red-500 font-medium" to={`/newsDetails/${_id}`}>
            Read More...
          </Link>
        </p>
        <div className="border-t-2 my-5 pt-4 flex  justify-between px-2">
          <div className="flex items-center gap-2">
            <Rating
              className="text-2xl"
              initialRating={rating.number}
              emptySymbol={<CiStar />}
              fullSymbol={<FaStar className="text-amber-500" />}
            />
            <p>{rating.number}</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaEye className="text-lg" />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  News: PropTypes.object,
};

export default NewsCard;
