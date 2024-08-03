import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCard from './components/HomeCard'
import JobListings from './components/JobListings';
import ViewAllJobs from './components/ViewAllJobs';
// used a short form to achieve this method -> rafce
/**
 *Normally, I can return one element in jsx. 
 * To return multiple elements, I can wrap them in a React Fragment <>.
 */

//  I had premade themes, In this case I copied the whole index.html and placed it here.
// I will divide the index.html code to different components(Navbar, Hero section, Job section) which is the standard React way. 
const App = () => {
  return (
    <>
    <Navbar />

    <Hero/>
    
    <HomeCard />

    <JobListings />   

    <ViewAllJobs /> 
      </>
   
  )
}

export default App