import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router';
import MainLayout from './layout/MainLayout.jsx';
import Homepage from './components/pages/Homepage/Homepage.jsx';
import About from './components/pages/About/About.jsx';
import Error from './components/pages/Error/Error.jsx';
import Details from './components/pages/Details/Details.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: Homepage },
      { path: 'about', Component: About },
      {
        path: 'details/:id',
        loader: ()=> fetch("https://jsonplaceholder.typicode.com/posts/"),
        Component: Details,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
