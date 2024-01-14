import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Details from './components/Product/Deatils';
import Home from "./components/Home"
import Login from './components/auth/Login';
import ForgotPassword from './components/auth/ForgotPassword';
import SignUp from './components/auth/SignUp';
import Otp from './components/auth/Otp';
import ProductList from './components/Product/ProductList';
import Product from './components/Product/Product';
import { Provider } from 'react-redux';
import {store,persistor}  from './mobixStore/store';
import { PersistGate } from 'redux-persist/integration/react';
import UpdatePassword from './components/auth/UpdatePassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {                                                               
        path: "/",
        element: <Home />,
      },
      {
        path: "details",
        element: <Details />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "otp",
        element: <Otp />,
      },
      {
        path: "productlist",
        element: <ProductList />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "updatepassword",
        element: <UpdatePassword />,
      },
    ],
  },

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={router} />
    </PersistGate>
  </Provider>
 

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
