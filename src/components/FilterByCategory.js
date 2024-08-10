import React, { useEffect } from 'react';
import { FetchFilterCategories } from '../redux-store/actions/actioncreators/filterCategoryActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Card, Rate } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';


const FilterByCategory = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { GetCategoriesFilter, loading } = useSelector(state => state.categoryfilters);

  useEffect(() => {
    dispatch(FetchFilterCategories(name));
  }, [dispatch, name]);
  return (
    <>
      <div style={{display:'flex' ,justifyContent:'space-between', alignItems:'center'}}>
        <div>
          {GetCategoriesFilter?.meals?.length > 0 ? <Button type="text" onClick={() => navigate(-1)}> <ArrowLeftOutlined />Back</Button> : ''}
        </div>
        <div style={{paddingRight:'4em'}}>
        {GetCategoriesFilter?.meals?.length > 0 ? `FilterByCategory - ${name} `: ''}
        </div>
      </div>
      <div className='categories-mainDiv-filter'>
        {
          GetCategoriesFilter?.meals
            ?.map((Cat, index) => {
              return (
                <div key={Cat?.idMeal} className={`categories-${index}`} style={{ marginBottom: '16px' }}>
                  <Link to={`/items/${Cat?.idMeal}/${index + 1}/${Cat?.price}`}>
                    <Card
                      hoverable
                      style={{
                        width: 220,
                      }}
                      loading={loading}
                      cover={<img alt={`${Cat?.strMeal}`} src={`${Cat?.strMealThumb}`} className='category-image-filter' />}
                    >
                      <div className='category-title'>
                        {Cat?.strMeal?.length > 18
                          ? `${Cat.strMeal.slice(0, 18)}...`
                          : Cat.strMeal}
                      </div>
                      <div className='category-price'>
                        Price: ₹{Cat?.price}
                      </div>
                      <div className='category-RATING'>
                        <Rate disabled defaultValue={index + 1} />
                      </div>
                    </Card>
                  </Link>
                </div>
              );
            })
        }
      </div>
    </>
  );
}

export default FilterByCategory;
