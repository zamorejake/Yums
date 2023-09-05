import { useQuery } from '@apollo/client';
import { QUERY_MATCHUPS } from '../utils/queries';
import Header from '../pages/Header';
import Footer2 from '../pages/Footer';
//import Carousel2 from '../pages/Carousel';

const Home = () => {
const { loading, data } = useQuery(QUERY_MATCHUPS, {
fetchPolicy: 'no-cache',
});

return (
    <>
    <Header />
    <p>Welcome to Yum Yum Yard, a culinary haven where flavors and experiences converge. Our establishment is a testament to the artistry of gastronomy, offering an exquisite array of delectable dishes crafted with passion and precision. With an unwavering commitment to quality, our chefs curate each plate as an embodiment of culinary excellence, infusing both traditional and innovative techniques. Nestled within our inviting ambiance, every visit to Yum Yum Yard is an exploration of tastes, an indulgence in luxury, and a journey through the world of gastronomy. Discover the embodiment of fine dining, where every ingredient tells a story and every dish is an eloquent expression of our dedication to the culinary craft.</p>
    <Footer2 />
    </>
);
};

export default Home;
