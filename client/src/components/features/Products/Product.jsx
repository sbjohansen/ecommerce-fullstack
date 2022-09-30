import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { useState } from 'react';
const Product = ({ item }) => {
  const [hoverEffect, setHoverEffect] = useState('opacity-0');

  const iconsStyle =
    'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover:scale-[1.1] ease-in duration-100 cursor-pointer';

  const handleHoverEnter = () => {
    setHoverEffect(' opacity-1 bg-[rgba(0,0,0,0.2)] ');
  };

  const handleHoverLeave = () => {
    setHoverEffect(' opacity-0 ');
  };

  return (
    <div
      className="flex flex-1 items-center justify-center min-w-[250px] h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative bg-black "
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
    >
      <img src={item.images[0]} alt="product_image" />
      <div
        className={
          ` flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-100 ` +
          hoverEffect
        }
      >
        {/*icons*/}
        <div className={iconsStyle}>
          <ShoppingCartOutlined />
        </div>
        <div className={iconsStyle}>
          <FavoriteBorderOutlined />
        </div>
        <div className={iconsStyle}>
          <SearchOutlined />
        </div>
      </div>
    </div>
  );
};

export default Product;
