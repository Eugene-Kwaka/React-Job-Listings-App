// Component for a single job listing
// {job} is a prop from the Job Listings parent component

import { useState } from 'react';
import {FaMapMarker} from 'react-icons/fa';

import {Link} from 'react-router-dom';

const SingleJobListing = ({ job }) => {

    /**
     * Now, I'm going to use the useState() hook to implement the 'View More' functionality in the job listings's description, 
     * where a user can click on the 'View More' button to expand the job description.
     * 
     * The useState(<defaultstate>) hook creates an array of two values, [<nameofthestate>, <methodtoupdatestate>].
     * In this case, the our defaultstate is 'false' meaning the description is not shown. 
     * When a user clicks on View More, the state is updated to 'true', which shows the description.
     */
    const [showFullDescription, setShowFullDescription] = useState(false);
   
    // Assign the job.description to a new variable description
    let description = job.description;

    // if showFullDescription is false, slice the description to 90 characters.
    if(!showFullDescription){
        // By the default, the value of showFullDescription is false, so in this case, the job.description is sliced into the first 90 words.
        description = description.substring(0, 90) + '...';
    }

    return (
            <div className="bg-white rounded-xl shadow-md relative">
                <div className="p-4">
                    <div className="mb-6">
                        <div className="text-gray-600 my-2">{ job.type }</div>
                            <h3 className="text-xl font-bold">{ job.title }</h3>
                    </div>

                    <div className="mb-5">
                        {/* I will update the job listing to include the new shortened version */}
                        { description }
                    </div>


                    {/* I will add an eventListener button that will change the state from either true or false.
                       - The () => defines an arrow function that will be executed when this button is clicked. 
                       - setShowFullDescription() is the useState's updater function for the showFullDescription state variable.
                       - '(prevState) => !prevState' is a function passed to setShowFullDescription() which takes the previous state(prevState -> By default its false. Do not show full description) as an argument, 
                         and returns the new state(!prevState -> show full job description) and vice versa.
                     */}
                    <button onClick={() => setShowFullDescription((prevState) => !prevState)} className="text-indigo-500 mb-5 hover:text-indigo-600">
                        
                        {/* I have used a ternary operator to check if the 'showFullDescription state is true, then the 'Less' button appears to shorten the description.
                            Otherwise, show the 'View More' button. */}
                        {showFullDescription ? 'Less' : 'View More'}
                    </button>

                    <h3 className="text-indigo-500 mb-2">{ job.salary } /Year</h3>

                    <div className="border border-gray-100 mb-5"></div>

                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                        <div className="text-orange-700 mb-3">
                            {/* FaMapMarker is react icon component I imported from React-icons hence it has the < /> tag */}
                            <FaMapMarker className='inline text-lg mb-1 mr-1' />
                            { job.location }
                        </div>
                        <Link
                        to={`/jobs/${job.id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                        >
                        Read More
                        </Link>
                    </div>
                </div>
            </div>
    
  )
}

export default SingleJobListing