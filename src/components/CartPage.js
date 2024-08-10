import React, { useEffect } from 'react';
import { Card, Col, Row, Button, Divider, Empty } from 'antd';
import { PlusOutlined, MinusOutlined, DeleteOutlined, ArrowRightOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { update_cart_item, remove_from_cart, clear_cart } from '../redux-store/actions/actioncreators/cartActions'; // Adjust imports as needed
import { useNavigate } from 'react-router-dom';
import { set_Orders } from '../redux-store/actions/actioncreators/orderActions';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.cartdetails);
  const Navigate = useNavigate();

  // Handle increasing quantity
  const handleIncreaseQuantity = (itemId) => {
    dispatch(update_cart_item(itemId, 1));
  };

  // Handle decreasing quantity
  const handleDecreaseQuantity = (itemId) => {
    dispatch(update_cart_item(itemId, -1));
  };

  // Handle removing item
  const handleRemoveItem = (itemId) => {
    dispatch(remove_from_cart(itemId));
  };

  // Calculate total price
  const calculateTotal = () => {
    return cartData.reduce((total, item) => total + item.quantity * item.price, 0);
  };


  const handlePlaceOrder = () => {
    // Example of order data, replace with actual logic
    const order = {
      orderId: new Date().getTime(), // Unique order ID
      items: cartData // Items to place in the order
    };
    dispatch(clear_cart());
    dispatch(set_Orders([order])); // Update with actual orders array
    Navigate('/orders')
  };

  useEffect(() => {
  }, [cartData]);

  return (

    <Row style={{ paddingTop: '12px' }}>
      {cartData?.length > 0 ?
        <>
          <Col xs={24} sm={16} md={16} lg={18}>
            <Card title="Cart Items">
              {cartData.map(item => (
                <Card
                  key={item.idMeal}
                  type="inner"
                  title={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <img
                        src={item.strMealThumb}
                        alt={item.strMeal}
                        style={{ width: 50, height: 50, objectFit: 'cover', marginRight: 10 }}
                      />
                      {item.strMeal}
                    </div>
                  }
                  extra={
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Button
                        icon={<MinusOutlined />}
                        style={{ marginRight: '8px' }}
                        onClick={() => handleDecreaseQuantity(item.idMeal)}
                        disabled={item.quantity <= 1}
                      />
                      {item.quantity}
                      <Button
                        icon={<PlusOutlined />}
                        style={{ marginLeft: '8px' }}
                        onClick={() => handleIncreaseQuantity(item.idMeal)}
                      />
                      <Button
                        icon={<DeleteOutlined />}
                        style={{ marginLeft: '8px', color: 'red' }}
                        onClick={() => handleRemoveItem(item.idMeal)}
                      />
                    </div>
                  }
                >
                  Price: ₹{item.price} <br />
                  Quantity: {item.quantity}
                </Card>
              ))}
            </Card>
          </Col>

          <Col xs={24} sm={8} md={8} lg={6}>
            <Card title="Summary">
              <p><strong>Total Items:</strong> {cartData.length}</p>
              <p><strong>Total Price:</strong> ₹{calculateTotal()}</p>
              <Divider />
              <Button type="primary" block onClick={handlePlaceOrder}>Place Order <ArrowRightOutlined /></Button>
            </Card>
          </Col>
        </>
        : <>
          <Col span={24}>
            <Empty
              image={Empty.PRESENTED_IMAGE_SIMPLE}
              description={<span>Your cart is empty</span>}
            />
          </Col></>}
    </Row>
  );
};

export default CartPage;
