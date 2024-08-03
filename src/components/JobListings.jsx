// Components for all the job listings. 
// At the moment, the app is not connected to any backend so jobs are not fetched from the backend. 
// The job listings are currently hard coded which is not what I want. So what I'll do is extract it from a .json file file.

import jobs from '../jobs.json';
import SingleJobListing from './SingleJobListing';


const JobListings = () => {

    /**
     * At the moment the page renders 6 jobs. I want to reduce that to 3.
     * I use the slice method, which takes two arguments(startindex, endindex). The element at the endindex is not included
     */
    const recentJobs = jobs.slice(0, 3);

  return (
            <section className="bg-blue-50 px-4 py-10">
                <div className="container-xl lg:container m-auto">
                    <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    Browse Jobs
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {/* Map each job listing from the jobs list and create a new list of job items.
                         - The jobs must have a unique key and in this case its the {job.id} and then we pass the job prop as well.
                        */}
                        {recentJobs.map((job) => (
                            // render each specific job
                            <SingleJobListing key={ job.id } job={ job } />
                    
                        ))}
                    
                    </div>
                </div>
            </section>
  )
}

export default JobListings