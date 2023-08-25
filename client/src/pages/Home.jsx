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
    <p>sample text for home</p>
    <Footer2 />
    </>
);
};

export default Home;
