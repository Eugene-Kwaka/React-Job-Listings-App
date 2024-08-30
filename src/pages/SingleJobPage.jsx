// USING DATALOADERS TO FETCH A SPECIFIC JOB BY ITS ID. I'M USING THE useLoaderData() hook. 


import { useParams, useLoaderData, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import {toast} from 'react-toastify';


// Adding the deleteJob() function prop from the App component. 
const SingleJobPage = ({deleteJob}) => {


    /**
    * useParams() hook is a component of React Router that is used to access the URL paramers of the current route.
    * In this case, I would be fetching the a single job based on the ${id} entered in the URL path. 
    * The {id} is used to fetch the specific job details from the API.
    */
    const { id } = useParams();

    /**
     * This method is a part of React-Router and not React itself. 
     * I DO NOT NEED the useEffect() and useState() hooks for this functionality. 
     * Do enable this function's access in app.jsx, I added the useLoaderData() hook.
     * 
     * The useLoaderData() is designed for loading in route components. 
     * It allows fetching data before rendering a component, ensuring the data is available when the component mounts.
     * This can improve performance by avoiding loading states within the component itself.
    */
    const job = useLoaderData();

    // Navigates me to different Routes in the application.
    const navigate = useNavigate();

     /**
     * This method deletes a job posting based on its id. 
     *
     */
     const OnDeleteClick = (jobId) => {
        // When the Delete Job button is clicked, present a pop-up alert asking a user if they want to delete the job.
        const confirm = window.confirm("Are you sure you want to delete this job posting?")
        // If they do not click 'Ok', return back to the page.
        if(!confirm){
          return;
        }
        // If they click 'Ok', run the DELETE logic from deleteJob() function in the App component and delete the job by its id.
        deleteJob(jobId);

        // Adding toastify notification just before redirecting
        toast.success("Job post deleted successfully");

        // Then navigate the user back to the JobsPage.
        return navigate('/jobs');
    }

    
    return (
        <>

        <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/jobs"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className="mr-2" /> Back to Job Listings
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{job.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {job.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <i
                  className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></i>
                <FaMapMarker className="text-orange-700 mb-1 mr-1" />{job.location}
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4">
               {job.description}
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">{job.salary} / Year</p>
            </div>
          </main>

        
          <aside>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">{job.company.name}</h2>

              <p className="my-2">
              {job.company.description}
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
              {job.company.contactEmail}
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">{job.company.contactPhone}</p>
            </div>

       
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
               to={`/edit-job/${job.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job
                </Link>
              <button 
                /**
                 * onClick() is an event handler in JS that triggers a callback function once the clicking event occurs.
                 * It runs the () => arrow function which then calls the onDeleteClick(job.id) function that takes the job.id value to delete the job.
                 */
                onClick={() => OnDeleteClick(job.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
        
        
        
        </>
    );

};

const jobLoader = async ({ params }) =>{

    // The params variable extracts the id from useParams() hook
    const {id} = params;

    const res = await fetch(`/api/jobs/${id}`);
    const data = await res.json();

    return data;
};

export { SingleJobPage as default, jobLoader };




















// -------------------------------- USING DATALOADER WITH USEEFFECT() --------------------------------------------------------------------------------------------------------
   
    // import {useEffect, useState} from 'react';
    // import  Spinner  from '../components/Spinner';

    // The default value of job is 'null' at first to indicate that there is no job yet fetched.
    // const [job, setJob] = useState(null);
    // const [loading, setLoading] = useState(true);

    // const [error, setError] = useState(null);
    // useEffect(() => {
    //     const fetchJob = async () => {
    //         try{
    //             // Because I'm fetching a job using its id, I will use `` to create a template literal that allows the dynamic insertion of the ${id} value to the URL.
    //             const res =  await fetch (`/api/jobs/${id}`);
    //             if (!res.ok){
    //                 throw new Error("Failed to fetch job.")
    //             }

    //             const data = await res.json();
               
    //             // The parsed data is then used to update the state value by calling the setJob(data) function.
    //             setJob(data);

    //         } catch(error){
    //             setError(error.message);

    //         // This block ensures that the loading state is set to false after the fetch operation completes. Regardless of whether it was successful or not.
    //         }finally{
    //             setLoading(false);
    //         }
    //     };

    //     fetchJob();

    //     // The dependency array has an id element, the fetchJob() function will re-run whenever the value of the id changes. 
    // }, [id]);

    // // // If loading state is true, then display the spinner.
    // // if (loading) return <Spinner />;

    // // // if error state is updated, then show the error
    // // if (error) return <div>Error: {error}</div>;

    // // // If no job is found return this message.
    // // if (!job) return <div>No job found</div>;
  
    // return loading ? <Spinner /> : <h1>{job.title}</h1>;

    // export default SingleJobPage;
    
