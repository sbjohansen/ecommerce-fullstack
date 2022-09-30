import Product from './Product';
import { getProducts, getRequest, loadProductsRequest } from '../../../redux/productsReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Products = ({ match }) => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const request = useSelector(getRequest);

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  if (request.pending || !products.length) return <p>Loading...</p>;
  if (request.error) return <p>Error! Details: {request.error}</p>;
  if (request.success)
    return (
      <div className="flex flex-wrap p-5 items-center justify-center xl:container m-auto">
        {products.map((product, index) => {
          return <Product item={product} key={index} />;
        })}
      </div>
    );
};

export default Products;
