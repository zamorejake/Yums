import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin.jsx';
import AdminEntree from './components/AdminEntrees.jsx'
import SingleEntree from './pages/SingleEntree.jsx'
import AdminBeverages from './components/AdminBeverages.jsx'
import SingleBeverage from './pages/SingleBeverage.jsx'
import NotFound from './pages/NotFound';
import Entree from './pages/Entree';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/admin', 
        element: <Admin />
      },
      {
        path: '/admin/entrees', 
        element: <AdminEntree />
      },
      {
        path: '/admin/entrees/:entreeId',
        element: <SingleEntree />
      },
      {
        path: '/admin/beverages', 
        element: <AdminBeverages />
      },
      {
        path: '/admin/beverages/:beverageId',
        element: <SingleBeverage />
      },
      {
        path: '/entree', 
        element: <Entree />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
