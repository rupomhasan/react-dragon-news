import { useLoaderData } from "react-router-dom";

const NewsCategories = ({ id }) => {
    
    const news = useLoaderData();
    console.log(news)



    return (
        <div>
            
        </div>
    );
};

export default NewsCategories;