import Counter from '../../common/Counter/Counter';

const ProductPage = () => {
  return (
    <div>
      <div className="flex justify-center mobile:flex-col mobile:mt-3">
        <div className="flex flex-1 items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KushJonesLST-ShirtinBlack09_360x.jpg?v=1642719733"
            alt="product"
            className="w-[80%] h-[80%] rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300"
          />
        </div>
        <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-10 mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">Creamy Hood Original</h1>
          <p className="pr-[4rem] text-justify mt-4 mobile:pr-4 mobile:pl-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ipsam, distinctio minima
            voluptatum ipsum sit rerum delectus excepturi reiciendis, eveniet doloribus explicabo
            ullam doloremque quidem inventore fugiat deserunt repellat pariatur.
          </p>
          <p className="mt-7 text-3xl">
            Price: <b>$70</b>
          </p>
          {/* color variants */}
          <div className="flex text-2xl mt-7">
            Colors
            <div className="bg-red-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
            <div className="bg-blue-600 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
            <div className="bg-yellow-400 w-[2rem] h-[2rem] rounded-full border-2 p-[10px] cursor-pointer ml-5 hover:border-[#8a4af3]"></div>
          </div>
          <div className="mt-7 text-2xl">
            Size
            <select className="ml-5 border-2 outline-none">
              <option selected disabled>
                Select
              </option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>
          <div className="mt-5">
            <Counter />
          </div>
          <button className="btn mt-5 mobile:mb-5">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
