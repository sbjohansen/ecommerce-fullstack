import { APICategories } from '../../../tempAPI/APICategories';
import Category from './Category';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCategories, getRequest, loadCategoriesRequest } from '../../../redux/categoryReducer';

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const request = useSelector(getRequest);

  useEffect(() => {
    dispatch(loadCategoriesRequest());
  }, [dispatch]);

  return (
    <div className="flex justify-center flex-wrap items-center p-5 mobile:flex-col xl:container m-auto">
      {categories.map((category, index) => {
        return <Category item={category} key={index} />;
      })}
    </div>
  );
};

export default Categories;
