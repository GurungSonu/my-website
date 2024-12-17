import React from 'react';
import HomePage from './Routes/HomePage/HomePage';
import Features from './Routes/Features/Features';
import Pricing from './Routes/Pricing/Pricing';
import Solution from './Routes/Solution/Solution';
import Resources from './Routes/Resources/Resources';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/', // Define the root path
    element: <HomePage />,
  },
  {
    path: '/resources', // Route for Resources
    element: <Resources />,
  },
  {
    path: '/solution', // Route for Solution
    element: <Solution />,
  },
  {
    path: '/pricing', // Route for Pricing
    element: <Pricing />,
  },
  {
    path: '/features', // Route for Features
    element: <Features />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
