/* eslint-disable react/prop-types */
/** Components for all the job listings. 
 At the moment, the app is not connected to any backend so jobs are not fetched from the backend. 
The job listings are currently hard coded which is not what I want. So what I'll do is extract it from a .json file.

 -> import jobs from '../jobs.json';

 *  Since I'm no longer using the default jobs.json file rather running that the json-server, 
 * I need to use the the useEffect() hook to fetch the data when the component renders. 
 */ 
import SingleJobListing from './SingleJobListing';

import { useState, useEffect } from 'react';

import {Link} from 'react-router-dom';

import  Spinner  from './Spinner';


// The JobListings component destructures the jobs object from 'jobs.json' and creates an 'isHome' property.
// The default state of isHome is false.
const JobListings = ({isHome = false}) => {
    
    /** NO LONGER USING THIS PART!!!
     * This line checks if 'isHome' is true, if so, it slices the jobs to three posts, otherwise it displays 6 jobs from the entire jobs array from jobs.json.
     * I use the slice method, which takes two arguments(startindex, endindex). The element at the endindex is not included.
     * 
     * -> const jobListings = isHome ? jobs.slice(0, 3) : jobs; // index 0, 1, 2
     */


    /**
     *  useState() hook that takes in the jobs from the jobs.json-server. The jobs will be fetched from the server and added to state.
     * The state in this case is an empty array.
     * 
     * Basically, I will use the useEffect() hook to fetch the jobs from the server, then update state with those jobs which will be adding to the empty array provided by the useState() hook.
     * The empty array will make a request when the component loads through the use of the useEffect and then fill it with the response from the API(json.server).
     */
    const [jobs, setJobs] = useState([])

    /**
     * This hook reps a loading spinner which displays when loading the data. 
     * It is set to true by default whereby the spinner is displayed.
     * When the data is loaded, the spinner disappers(-> state changes to false)
     */
    const [loading, setLoading] = useState(true)


     /**
     * The useEffect() hook takes two things:
     *      - a function -> Runs after the component renders, and reruns whenever any of the dependencies in the dependency array change
     *      - a dependency array
     * 
     * useEffect(() => {}, [<dependency array>])
     * 
     * For example, if I put 'name' variable in the dependency array, the useEffect() will run whenever that name changes.
     * It is good to have an empty array in most cases. 
     * 
     * In the function ()=>{}, that is where I will do the fetching. 
     * I will create a separate nested async function inside it.
     */
     useEffect(() => {

        // fetchJobs() is an asynchronous function that is responsible for fetching data from the json-server.
        const fetchJobs = async () => {

            // This line limits the number of job postings in the HomePage to 3 if the prop 'isHome' = true
            // Otherwise it displays the normal 6 job postings like in the JobsPage.
            const apiURL = isHome ? '/api/jobs?_limit=3' : '/api/jobs'
            
            try{
                // fetch() API makes a request to the api endpoint and returns a promise that resolves to the response of the request.
                // 'res' represents the response after fetching data from the server.
                // The 'await' waits for the promise to resolve and then store the response in the 'res' variable. 
                const res = await fetch(apiURL);
            
                // After the data is fetched, it is changed to json format. 
                const data = await res.json();
                
                // Update the state(enter the fetched jobs into the empty array) using the setJobs() function in useState().
                setJobs(data);

            } catch(error){
                console.log('Error fetching jobs: ', error)

            /** 
             * This block runs regardless of whether we successfully fetch the jobs or not. 
             * When the loading spinner is set to false, it stops spinning. 
             * */
            }finally{
                setLoading(false);
            }
            
        }

        fetchJobs();
      // Empty dependency array 
    }, [])
    


    return (
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center"> 

                    {/* Using the isHome prop, we can show that if isHome=true(If we are at the HomePage, then show 'Recent Jobs', else show 'Browse Jobs' -> in the Jobspage) */}
                    {isHome? 'Recent Jobs': 'Browse Jobs'}

                    </h2>

                        {/* When the loading state value is true -> display "Loading..." 
                        - Otherwise display the all the job listings. */}
                        {loading? (
                            <Spinner loading={loading} />
                            ) : (

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    {/* Map each job listing from the jobs list and create a new list of job items.
                                    - The jobs must have a unique key and in this case its the {job.id} and then we pass the job prop as well.
                                    */}
                            
                                    {jobs.map((job) => (
                                    // render each specific job
                                    // SingleJobListing-> Child component
                                    // job -> Data passed to the child component
                                    <SingleJobListing key={ job.id } job={ job } />
                            
                                    ))}
                                </div>    
                            )
                        }

                </div>
            </section>
  )
}

export default JobListings