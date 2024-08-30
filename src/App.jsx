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
import EditJobPage from './pages/EditJobPage';

// I will also import jobLoader as I have exported it in the SingleJobPage component.
import SingleJobPage, {jobLoader} from './pages/SingleJobPage';


const App = () => {

  /** ADD NEW JOB -> POST Request 
   * This function is responsible for handling the logic related to adding a new job.
   * This function contains the POST request that sends the newJob object to the server.
   * The function takes the newJob object from the submitted form in the AddJobPage component. 
   * 
   * By passing this function here, I'm separating concerns whereby:
   *  -> The App component handles submission while the AddJobPage handles rendering the form and user input.
   *  -> The AddJob component can be reused in different components with different submission logic. 
   */ 
  const addJob = async (newJob) => {
      try{
          const res = await fetch('/api/jobs', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
          },
          // The newJob object will be parsed to a JSON string using JSON.stringify
          body: JSON.stringify(newJob),
        });

        return;

      } catch (error) {
          console.error('Error submitting job:', error);
      }

  }

  /** UPDATE JOB -> PUT request */
  const updateJob = async (job) =>{
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      // The updatedJob object will be parsed to a JSON string using JSON.stringify
      body: JSON.stringify(job),
    });

  return;
  }

  /** DELETE JOB -> DELETE Request
   * Does not take in headers or body as it is a DELETE request.
   */
  const deleteJob = async (id) => {
      const res = await fetch(`/api/jobs/${id}`, {
        method: 'DELETE',
      });
      return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      // I have wrapped the HomePage, JobsPage and NotFoundPage under the <MainLayout/> component which has the Navbar and Footer components that persists throughout all pages.
      <Route path='/' element={< MainLayout />}>
  
                <Route index element ={< HomePage />} />
          
                {/* Get All Jobs */}
                <Route path='/jobs' element={< JobsPage />} />
          
                {/* Add Job 
                  - The addJobSubmit is a prop that is passed down to the AddJobPage component.
                  - This means that the addJob() function is also passed  to the AddJobPage component using the addJobSubmit prop as its value.
                */}
                <Route path='/add-job' element={< AddJobPage addJobSubmit = {addJob}/>} />

                {/** Edit Job.
                 * I will also pass the jobLoader in this component so that I can access a single job post to edit.
                 */}
                <Route path='/edit-job/:id' element={< EditJobPage updateJobSubmit={updateJob}/>} loader={jobLoader}/>
                
                
                {/** Access SingleJob and Delete Job 
                 * The ':' symbolizes that this is a dynamic id to represent a single job id.
                 * I add the jobLoader part as well from the jobLoader() function. 
                 * 
                 * I add the deleteJob prop to this Route as well because the 'Delete Job' is in this component, 
                 * and the I require the specific job's id to delete it.
                 */}
                <Route path='/jobs/:id' element={< SingleJobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
          
                {/* The '*' means any page not found, or not created in the spa returns this page. */}
                <Route path='*' element={< NotFoundPage />} />
  
      </Route>
    )
  );

  return (
    <RouterProvider router={router}>
    </RouterProvider>
  )
  
}

export default App