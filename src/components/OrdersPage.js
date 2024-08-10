import React from 'react';
import { useSelector } from 'react-redux';
import { Card, Col, Row } from 'antd';

const OrdersPage = () => {
  const orders = useSelector(state => state.orders);

  return (
    <Row style={{ paddingTop: '12px' }}>
      <Col span={24}>
        <Card title="Orders">
          {orders.length > 0 ? (
            orders.map(order => (
              <Card
                key={order.orderId}
                type="inner"
                title={`Order ID: ${order.orderId}`}
              >
                {order.items.map(item => (
                  <div key={item.idMeal} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
                    <img
                      src={item.strMealThumb}
                      alt={item.strMeal}
                      style={{ width: 50, height: 50, objectFit: 'cover', marginRight: 10 }}
                    />
                    <div>
                      <p>{item.strMeal} - Quantity: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </Card>
            ))
          ) : (
            <p>No orders found</p>
          )}
        </Card>
      </Col>
    </Row>
  );
};

export default OrdersPage;
