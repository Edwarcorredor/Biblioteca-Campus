import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Login from './components/login/Login.jsx';
import Register from './components/register/Register.jsx';
import AppAdmin from './AppAdmin.jsx';
import Product from './components/product/Product.jsx';
import Inventory from './components/inventory/Inventory.jsx';
import Loan from './components/loan/Loan.jsx';
import { NextUIProvider } from '@nextui-org/react';
import './index.css';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute.jsx';
import AppUser from './AppUser.jsx';

const urlBackend = "http://192.168.129.72:5210";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login url={`${urlBackend}/auth/login`} />,
  },
  {
    path: '/register',
    element: <Register url={`${urlBackend}/auth/register`} />,
  },
  {
    path: '/admin',
    element: <ProtectedRoute component={AppAdmin} role="admin"/>,
    children: [
      {
        path: 'product/create',
        element: <ProtectedRoute component={Product} role="admin" url={`${urlBackend}/product/create`} title="Create Product" metodo="POST" />,
      },
      {
        path: 'product/update',
        element: <ProtectedRoute component={Product} role="admin" hidden  url={`${urlBackend}/product/update`} title="Update Product" metodo="PUT" />,
      },
      {
        path: 'inventory/create',
        element: <ProtectedRoute component={Inventory} role="admin" url={`${urlBackend}/inventory/create`} title="Create Inventory" metodo="POST" />,
      },
      {
        path: 'inventory/update',
        element: <ProtectedRoute component={Inventory} role="admin" hidden url={`${urlBackend}/inventory/update`} title="Update Inventory" metodo="PUT" />,
      },
      {
        path: 'loan/create',
        element: <ProtectedRoute component={Loan} role="admin" url={`${urlBackend}/loan/create`} title="Create Loan" metodo="POST" />,
      },
      {
        path: 'loan/update',
        element: <ProtectedRoute component={Loan} role="admin" hidden url={`${urlBackend}/loan/update`} title="Update Loan" metodo="PUT" />,
      },
      
    ],
  },
  {
    path: '/user',
    element: <ProtectedRoute component={AppUser} role="user"/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="dark text-foreground bg-background bg-[url] ">
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>,
);
