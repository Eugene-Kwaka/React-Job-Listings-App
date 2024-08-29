import React from 'react'

import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

/**
 * The <outlet/> is a component in react-router dom that:
 *  - Renders child routes(HomePage, JobPage, AddJobsPage) within a parent route(MainLayout).
 *  - It allows for nested user interfaces to show up when child routes are rendered. This is particularly useful for creating layouts with shared elements across multiple routes.
 * @returns 
 */

const MainLayout = () => {
  return (
    <>
        {/* In this case the Navbar will be present within all Outlet components(HomePage, Jobs, AddJobs) */}
        <Navbar />

        <Outlet />
    </>
  )
}

export default MainLayout