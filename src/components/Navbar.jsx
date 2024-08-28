import React from 'react';
// I added the logo to an assets/images in src folder and imported it here
import logo from '../assets/images/logo.png';

import {NavLink} from 'react-router-dom';


const Navbar = () => {

    // Checks the Link in the Navbar, if the link cirresponds to the current page (isActive) the link becomes black, otherwise remains white text.
    const linkClass = ({ isActive }) =>
        isActive
          ? 'bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2'
          : 'text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2';

    return(
        <>
            <nav className="bg-indigo-700 border-b border-indigo-500">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        <div
                            className="flex flex-1 items-center justify-center md:items-stretch md:justify-start"
                        >
                            {/* <!-- Logo --> */}
                            {/* I replace the previous <a href> links with the <Link to/> component to avoid rerendering and make the routing fast. */}
                            <NavLink
                                className="flex flex-shrink-0 items-center mr-4" to="/">
                                <img
                                    className="h-10 w-auto"
                                    // The logo image is passed in the component dynamically
                                    src={logo}
                                    alt="React Jobs"
                                />
                                <span className="hidden md:block text-white text-2xl font-bold ml-2"
                                    >React Jobs</span
                                >
                            </NavLink>
                            <div className="md:ml-auto">
                                <div className="flex space-x-2">
                                {/* Home button */}
                                    <NavLink
                                    to="/"
                                    className={linkClass}
                                    >Home</ NavLink>
                                    
                                    {/* Jobs button */}
                                    <NavLink
                                    to="/jobs"
                                    className={linkClass}
                                    >Jobs</NavLink>
                                
                                {/* Add jobs button */}
                                    <NavLink
                                    to="/add-job"
                                    className={linkClass}
                                    >Add Job</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar