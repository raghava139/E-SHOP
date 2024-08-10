import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux-store/store/store';
import 'antd/dist/antd';
import { BrowserRouter as Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>,
    </Provider>
  </StrictMode>
);

reportWebVitals();
