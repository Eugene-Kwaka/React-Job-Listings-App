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
import AddJobPage from './pages/AddJobPage';

// I will also import jobLoader as I have exported it in the SingleJobPage component.
import SingleJobPage, {jobLoader} from './pages/SingleJobPage';




const router = createBrowserRouter(
  createRoutesFromElements(
    // I have wrapped the HomePage, JobsPage and NotFoundPage under the <MainLayout/> component which has the Navbar and Footer components that persists throughout all pages.
    <Route path='/' element={< MainLayout />}>

      <Route index element ={< HomePage />} />

      <Route path='/jobs' element={< JobsPage />} />

      {/** The ':' symbolizes that this is a dynamic id to represent a single job id.
       * I add the jobLoader part as well from the jobLoader() function. 
       * 
       */}
      <Route path='/jobs/:id' element={< SingleJobPage />} loader={jobLoader}/>

    
      <Route path='/add-job' element={< AddJobPage />} />


      {/* The '*' means any page not found, or not created in the spa returns this page. */}
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