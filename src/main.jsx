import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main.jsx';
import Home from './pages/Home/Home.jsx';
import Blog from './pages/Blog/Blog.jsx';
import Error from './pages/Error/Error.jsx';
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';
import ChefData from './pages/ChefData/ChefData.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import ChefRecipe from './pages/ChefRecipe/ChefRecipe.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: ":id",
        element: <PrivateRoutes><ChefRecipe></ChefRecipe></PrivateRoutes>,
        loader:({params})=>fetch(`https://food-fair-server-site.vercel.app/chef/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
