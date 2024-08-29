// import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import  Spinner  from '../components/Spinner';


// USING Dataloader with useEffect() Hook.
const SingleJobPage = () => {

    /**
    * useParams() hook is a component of React Router that is used to access the URL paramers of the current route.
    * In this case, I would be fetching the a single job based on the ${id} entered in the URL path. 
    * The {id} is used to fetch the specific job details from the API.
    */
    const { id } = useParams();

    /**This method is a part of React Router and not React itself 
     * I DO NOT NEED the useEffect() and useState() hooks for this example. 
    */
    const jobLoader = async({ params }) =>{

        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();

        return data;
    }

}

export { SingleJobPage as default, jobLoader };



// -------------------------------- USING DATALOADER WITH USEEFFECT() --------------------------------------------------------------------------------------------------------
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
    
