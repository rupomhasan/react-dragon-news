import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex my-5 bg-gray-100 p-3 items-center gap-2">
      <button className="btn btn-sm bg-[#D73050] text-white hover:bg-[#D70000]">
        Latest
      </button>

      <Marquee>
        <p className="mr-4 text-lg font-semibold">
          Match Highlights : Germany vs Spain as it happene...
        </p>
        <p className="mr-4 text-lg font-semibold">
          Match Highlights : Germany vs Spainas as it happened...
        </p>
        <p className="mr-4 text-lg font-semibold">
          Match Highlights : Germany vs Spainas as it happened...
        </p>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
