import Products from '../../features/Products/Products';

const CategoryPage = ({ match }) => {
  return (
    <div className="flex flex-col p-5 ">
      <h1 className="text-[30px]">Mens CLoth</h1>
      <div className="flex items-center justify-between mt-3">
        <div className="flex mobile:flex-col">
          <p>Filter by</p>
          <select className="ml-3 border-2 border-silver">
            <option selected disabled>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
          <select className="ml-3 border-2 border-silver mobile:mt-3">
            <option selected disabled>
              Color
            </option>
            <option>Black</option>
            <option>White</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
          </select>
        </div>
        <div className="flex mobile:flex-col mobile:self-start mobile:text-right">
          <p>Sort by</p>
          <select className="ml-3 border-2 border-silver">
            <option>Newest (first)</option>
            <option>Oldest (first)</option>
            <option>Price (Asc)</option>
            <option>Price (Des)</option>
          </select>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default CategoryPage;
