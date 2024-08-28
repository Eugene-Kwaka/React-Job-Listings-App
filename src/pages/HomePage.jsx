
// I want the these sections of the application to only be visible in the HomePage, so I this case I import them to the HomePage.
// Instead of rendering these components from the App.jsx, I will render them from here. 
import Hero from '../components/Hero';
import HomeCard from '../components/HomeCard';
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return ( 
    <>
        <Hero />
        <HomeCard />
        
        {/* The 'isHome' prop comes from the parent component -> 'JobListings' which is being rendered in the HomePage.
           - In this case, the JobListings component displays a different layout (3 jobs) in the HomePage compared to the 6 jobs in the JobsPage
           - Here 'isHome' is true.*/}
        <JobListings isHome/>

        <ViewAllJobs />
    </>
    
  )
}

export default HomePage