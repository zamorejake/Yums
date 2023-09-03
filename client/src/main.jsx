import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin.jsx';
import NotFound from './pages/NotFound';
import Entree from './pages/Entree';
import Success from './pages/Success.jsx';
import Fail from './pages/Fail.jsx';

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
        path: '/entree', 
        element: <Entree />
      },
      {
        path: '/success', 
        element: <Success />
      },
      {
        path: '/fail', 
        element: <Fail />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
