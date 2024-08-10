import React from 'react';
import { Badge, Layout, Menu } from 'antd';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { HomeOutlined, ShoppingCartOutlined, UnorderedListOutlined } from '@ant-design/icons';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import OrdersPage from './components/OrdersPage';
import ItemPage from './components/ItemPage';
import './App.css'
import FilterByCategory from './components/FilterByCategory';
import { useSelector } from 'react-redux';
import { Footer } from 'antd/es/layout/layout';

const { Header, Content } = Layout;

const App = () => {
  const cartData = useSelector(state => state.cartdetails);
  const orders = useSelector(state => state.orders);
  const navigate = useNavigate();

  return (
    <Layout className="layout">
      <Header className="header">
        <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>RY</div>
        <Menu theme="dark" mode="horizontal" className='menu'>
          <Menu.Item key="1">
            <Link to="/">
              <HomeOutlined style={{ color: 'white', fontSize: '22px' }} />
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/cart">
              <Badge size="small" count={cartData?.length}>
                <ShoppingCartOutlined style={{ color: 'white', fontSize: '22px' }} />
              </Badge>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/orders">
              <Badge size="small" count={orders?.length}>
                <UnorderedListOutlined style={{ color: 'white', fontSize: '22px' }} />
              </Badge>
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content>
        <div className="site-layout-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/cart/:id" element={<CartPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/categoryfilter/:name/" element={<FilterByCategory />} />
            <Route path="/items/:id/:rating/:price" element={<ItemPage />} />
          </Routes>
        </div>
      </Content>
      <Footer>E-Shop ©2024 Created by Raghavendra</Footer>
    </Layout>
  );
};

export default App;
