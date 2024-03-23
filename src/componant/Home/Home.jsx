import Banner from "../../Banner/Banner";
import CategoryList from "../../CategoryList/CategoryList";
import FeaturedJobs from "../../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div className="text-center">
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;