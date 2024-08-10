import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FetchBySingleItem } from '../redux-store/actions/actioncreators/ItemAction';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Rate, Row, Skeleton } from 'antd';
import { ArrowLeftOutlined, PlusOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { add_to_cart } from '../redux-store/actions/actioncreators/cartActions';

const ItemPage = () => {
  const { id, rating, price } = useParams();
  const dispatch = useDispatch();
  const { GetSingleItem, loading } = useSelector(state => state.singlefilter);
  const cartData = useSelector(state => state.cartdetails);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(FetchBySingleItem(id, price));
  }, [dispatch, id]);

  const isItemInCart = (itemId) => cartData.some(cartItem => cartItem.idMeal === itemId);

  const handleButtonClick = (item) => {
    if (isItemInCart(item.idMeal)) {
      navigate('/cart');
    } else {
      dispatch(add_to_cart(item));
      navigate(`/cart/${item.idMeal}`);
    }
  };

  const buttonStyle = {
    width: '121%',
    padding: '21px',
  };

  const addToCartButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#a54c31',
    borderColor: '#a54c31',
    color: '#fff',
  };

  const goToCartButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#38a531',
    borderColor: '#38a531',
    color: '#fff',
  };

  return (
    <>
      <div>
        <Button type="text" onClick={() => navigate(-1)}> <ArrowLeftOutlined />Back</Button>
      </div>

      <div className='item-page-container' style={{ padding: '16px' }}>
        {
          loading ? (
            <Skeleton active>
              <div className='item-page-content'>
                <div className='item-page-image'>
                  <Skeleton.Image className='item-image' />
                  <Row gutter={20} style={{ display: 'flex' }}>
                    <Col span={20}>
                      <Skeleton.Button active style={{ width: '120%', padding: '21px' }} />
                    </Col>
                  </Row>
                </div>
                <div className='item-page-details'>
                  <Skeleton active>
                    <Skeleton.Input style={{ width: 200 }} />
                    <Skeleton.Input style={{ width: 100 }} />
                    <Skeleton.Input style={{ width: 300 }} />
                    <Skeleton.Input style={{ width: 250 }} />
                    <Skeleton.Input style={{ width: 150 }} />
                  </Skeleton>
                </div>
              </div>
            </Skeleton>
          ) : (
            GetSingleItem?.meals?.map((item) => (
              <div key={item.idMeal} className='item-page-content'>
                <div className='item-page-image'>
                  <img
                    alt={item.strMeal}
                    src={item.strMealThumb}
                    className='item-image'
                  />
                  <Row gutter={20} style={{ display: 'flex' }}>
                    <Col span={20}>
                      <Button
                        type='primary'
                        style={isItemInCart(item.idMeal) ? goToCartButtonStyle : addToCartButtonStyle}
                        onClick={() => handleButtonClick(item)}
                      >
                        {isItemInCart(item.idMeal) ? (
                          <>
                            <ShoppingCartOutlined /> Go To Cart
                          </>
                        ) : (
                          <>
                            <PlusOutlined /> Add To Cart
                          </>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </div>
                <div className='item-page-details'>
                  <h1 className='item-title'>{item.strMeal.toUpperCase()}</h1>
                  <h4 className='item-description'>Category: {item.strCategory}</h4>
                  <h4 className='item-description'>Area: {item.strArea}</h4>
                  <div className='item-price'>
                    Price: ₹{price || 'N/A'}
                  </div>
                  <div className='category-RATING'>
                    <Rate disabled defaultValue={rating} />
                  </div>
                  <p className='item-description'><strong>Description:</strong> {item.strInstructions}</p>
                  <p className='item-description'>
                    <strong>{item.strYoutube ? 'Video Link:' : null}</strong>
                    <a href={item.strYoutube} target='_blank' rel="noreferrer">{item.strYoutube}</a>
                  </p>
                </div>
              </div>
            ))
          )
        }
      </div>
    </>
  );
};

export default ItemPage;
