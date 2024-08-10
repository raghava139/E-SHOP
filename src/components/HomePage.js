import { Card} from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FetchCategories } from '../redux-store/actions/actioncreators/CategoryActions';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const dispatch = useDispatch();
  const { GetCategories, loading } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(FetchCategories());
  }, [dispatch]);
  return (
    <>
      { GetCategories?.categories?.length>0 ?<h3 style={{textAlign:'center'}}>Categories</h3>:''}
      <div className='categories-mainDiv'>
        {
          GetCategories?.categories
            ?.map((Cat, index) => {
              return (
                <div key={Cat?.idCategory} className={`categories-${index}`}>
                  <Link to={`/categoryfilter/${Cat?.strCategory}`}>
                    <Card
                      hoverable
                      style={{
                        width: 240,
                      }}
                      loading={loading}
                      cover={<img alt={`${Cat?.strCategory}`} src={`${Cat?.strCategoryThumb}`} />}
                    >
                      <div className='category-name'>{Cat?.strCategory}</div>
                    </Card>
                  </Link>
                </div>
              );
            })
        }

      </div>
    </>
  )
}

export default HomePage