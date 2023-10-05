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

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login url="http://127.10.10.10:5030/auth/login" />,
  },
  {
    path: '/register',
    element: <Register url="http://127.10.10.10:5030/auth/register" />,
  },
  {
    path: '/admin',
    element: <ProtectedRoute component={AppAdmin} role="admin"/>,
    children: [
      {
        path: 'product/create',
        element: <ProtectedRoute component={Product} role="admin" url="http://127.10.10.10:5030/product/create" title="Create Product" method="POST" />,
      },
      {
        path: 'product/update',
        element: <ProtectedRoute component={Product} role="admin" hidden  url="http://127.10.10.10:5030/product/update" title="Update Product" method="PUT" />,
      },
      {
        path: 'inventory/create',
        element: <ProtectedRoute component={Inventory} role="admin" url="http://127.10.10.10:5030/inventory/create" title="Create Inventory" method="POST" />,
      },
      {
        path: 'inventory/update',
        element: <ProtectedRoute component={Inventory} role="admin" hidden url="http://127.10.10.10:5030/inventory/update" title="Update Inventory" method="PUT" />,
      },
      {
        path: 'loan/create',
        element: <ProtectedRoute component={Loan} role="admin" url="http://127.10.10.10:5030/loan/create" title="Create Loan" method="POST" />,
      },
      {
        path: 'loan/update',
        element: <ProtectedRoute component={Loan} role="admin" hidden url="http://127.10.10.10:5030/loan/update" title="Update Loan" method="PUT" />,
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
