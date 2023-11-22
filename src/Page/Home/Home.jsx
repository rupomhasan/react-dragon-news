import { useLoaderData } from "react-router-dom";
import BreakingNews from "./BreackingNews/BreakingNews";
import Header from "./Header/Header";
import LeftSideNav from "./Navbar/LeftSideNav";
import Navbar from "./Navbar/Navbar";
import RightSideNav from "./Navbar/RightSideNav";
import NewsCard from "./NewsCard/NewsCard";
import { useState } from "react";

const Home = () => {
  const news = useLoaderData();
  console.log(news);

  const [displayedNews, setDisplayedNews] = useState(news.slice(0, 2));
  const [currentIndex, setCurrentIndex] = useState(2);

  const handleLoadMoreNews = () => {
    const nextBatch = news.slice(currentIndex, currentIndex + 4);
    setDisplayedNews([...displayedNews, ...nextBatch]);
    setCurrentIndex(currentIndex+3)
  };
  console.log(currentIndex)

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 mt-16 gap-6">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className=" md:col-span-2">
          <h3 className="text-2xl font-medium mb-8">Dragon News Home</h3>

          {displayedNews.map((singleNews, idx) => (
            <NewsCard key={idx} News={singleNews}></NewsCard>
          ))}
          <button onClick={handleLoadMoreNews} className="text-red-400">
            Load More...
          </button>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
