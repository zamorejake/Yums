import { useQuery } from '@apollo/client';
//import Carousel2 from '../pages/Carousel';

const Home = () => {
const test = "test";


return (
    <>
    <div class="container class=bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
    <div class="intro">
      <h1>Welcome to Yums</h1>
      <p class="description">Indulge in a culinary journey where flavors are artfully crafted, and experiences unfold with each delectable dish. At Yum Yum Yard, our devotion to culinary excellence is unwavering. With a harmonious blend of traditional wisdom and innovative techniques, our chefs meticulously prepare each plate to be a masterpiece of taste and presentation. Immerse yourself in an ambiance that exudes sophistication and relish in a symphony of flavors that tell stories of passion and dedication. Elevate your dining experience and discover the embodiment of refined gastronomy.</p>
    </div>
    

    <section class="hero">
      <img class="h-auto max-w-full flex justify-center items-center" src="images/restaurant.jpg" alt="Background image"/>
      <div class="container">
        <h1>Experience Culinary Perfection</h1>
        <p>Savor the extraordinary.</p>
        <a href="#featured-recipes" class="cta-button">Explore Recipes</a>
      </div>
    </section>

    <section id="featured-recipes" class="featured-recipes">
      <div class="container">
        <h2>Featured Recipes</h2>
        <div class="recipe-card">
          <h3>Signature Dish 1</h3>
          <p>Discover the unique flavors of our signature dish.</p>
        </div>
        <div class="recipe-card">
          <h3>Signature Dish 2</h3>
          <p>Experience culinary excellence like never before.</p>
        </div>
      </div>
    </section>
  </div>
    </>
);
};

export default Home;