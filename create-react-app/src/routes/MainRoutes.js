import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));

//product
import CreateProduct from 'components/Product/createProduct';
import AllProduct from 'components/Product/allProduct';
import Product from 'components/Product/Product';
// import { element } from 'prop-types';
// const addProduct = Loadable(lazy(()=>import('components/Product/createProduct')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: '/product',
      children: [
        {
          path: 'add',
          element: <CreateProduct />
        },
        {
          path:'view',
          element:<AllProduct/>
        },
        {
          path:':id',
          element:<Product/>
        }
      ]
    }
  ]
};

export default MainRoutes;
