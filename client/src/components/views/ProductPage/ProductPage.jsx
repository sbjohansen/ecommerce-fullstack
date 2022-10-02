import Counter from '../../common/Counter/Counter';
import { useParams } from 'react-router-dom';
import { loadProductByIdRequest, getRequest, getProducts } from '../../../redux/productsReducer';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_URL } from '../../../config';

const ProductPage = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const productId = id;

  useEffect(() => {
    dispatch(loadProductByIdRequest(productId));
  }, [dispatch, productId]);

  const request = useSelector(getRequest);
  const product = useSelector(getProducts);

  if (request.pending || !product) return <p>Loading...</p>;
  if (request.error) return <p>Error! Details: {request.error}</p>;
  if (request.success)
    return (
      <div>
        <div className="flex justify-center mobile:flex-col mobile:mt-3 text-white mt-[50px] mb-[50px]">
          <div className="flex flex-1 items-center justify-center">
            <img
              src={product.images[0]}
              alt="product"
              className="w-[80%] h-[80%] object-contain rounded-lg shadow-lg hover:scale-[1.1] ease-in duration-300 bg-black"
            />
          </div>
          <div className="flex-[1.3] flex items-start justify-items-start flex-col mt-10 mobile:items-center">
            <h1 className="title text-[40px] mobile:text-[30px]">{product.name}</h1>
            <p className="pr-[4rem] text-justify mt-4 mobile:pr-4 mobile:pl-4">
              {product.description}
            </p>
            <p className="mt-7 text-3xl">
              Price: <b>${product.price}</b>
            </p>
            <div className="mt-7 text-2xl">
              Size
              <select className="ml-5 border-2 outline-none text-black w-[150px]">
                <option selected disabled>
                  Select
                </option>
                {product.size.map((size) => (
                  <option value={size}>{size}</option>
                ))}
              </select>
              <div className="mt-7 text-2xl">
                Type
                <select className="ml-5 border-2 outline-none text-black">
                  <option selected disabled>
                    Select
                  </option>
                  {product.type.map((type) => (
                    <option value={type}>{type}</option>
                  ))}
                </select>
              </div>
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
