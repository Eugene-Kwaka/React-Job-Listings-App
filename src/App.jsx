// I imported the React-Router-DOM for routing.

import { Route, // -> define individual routes in your application.
createBrowserRouter, // -> function used to create a router instance for web projects.
createRoutesFromElements, // -> Creates routes from an array of elements.
RouterProvider // -> Provides the router context to the rest of the application.
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';


import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    // I have wrapped the HomePage, JobsPage and NotFoundPage under the <MainLayout/> component which has the Navbar and Footer components that persists throughout all pages.
    <Route path='/' element={< MainLayout />}>

      <Route index element ={< HomePage />} />

      <Route path='/jobs' element={< JobsPage />} />

      {/* The '*' means any page not found in the spa returns this page. */}
      <Route path='*' element={< NotFoundPage />} />

    </Route>
  )
);

const App = () => {

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
  
}

export default App