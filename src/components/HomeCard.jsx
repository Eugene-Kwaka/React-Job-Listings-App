// This is a Wrapper Component that holds all the cards in the Home page. 
// It includes the 'For Developers' and 'For Employers' cards.
import React from 'react';
import Card from './Card';

import {Link} from 'react-router-dom';

// In the content below, I will look for the div element with the bg-gray(For Developers) card and bg-indigo(For Employers) card
// and then pass in the Card component repping the individual card. I will insert the contents between the Card component

const HomeCard = () => {
  return (
        <>
            <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                   
                   {/* 'For Developers' card is a child component, I specified the style in Card.jsx and now I'm inserting it and its content in the parent component ->  */}
                    <Card>
                        <h2 className="text-2xl font-bold">For Developers</h2>
                            <p className="mt-2 mb-4">
                            Browse our React jobs and start your career today
                            </p>
                            <Link
                            to="/jobs"
                            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
                            >
                            Browse Jobs
                            </Link>
                    </Card>
                    
                    {/* 'For Employers' card is a child component, I specified the default style in Card.jsx and now I'm modifying it and its content in the parent component ->  */}
                    <Card bg ='bg-indigo-100'>
                    <h2 className="text-2xl font-bold">For Employers</h2>
                        <p className="mt-2 mb-4">
                        List your job to find the perfect developer for the role
                        </p>
                        <Link
                        to="/add-job"
                        className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
                        >
                        Add Job
                        </Link>
                    </Card>
                </div>
            </div>
        </section>
        
        
        
        
        </>
  )
}

export default HomeCard