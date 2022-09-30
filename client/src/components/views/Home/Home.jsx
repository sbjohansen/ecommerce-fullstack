import Categories from '../../features/Categories/Categories';
import Products from '../../features/Products/Products';
import Slider from '../../common/Slider/Slider';

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;
