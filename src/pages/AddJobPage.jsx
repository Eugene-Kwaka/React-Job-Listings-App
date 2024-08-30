
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {toast} from 'react-toastify';


// Adding the addJobSubmit() function prop that takes the newJob object and enables us to send form data to a server or API.
const AddJobPage = ({ addJobSubmit }) => {


    // I create state for each field in the form(reps each job property e.g title, type, description...)
    const [title, setTitle] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [salary, setSalary] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companyDescription, setCompanyDescription] = useState('');
    const [companyContactEmail, setCompanyContactEmail] = useState('');
    const [companyContactPhone, setCompanyContactPhone] = useState('');


    /**
     * This hook programmatically navigates to different routes in the application. 
     * In this case, it navigates me to the JobsPage('/jobs') after the form is succesfully submitted. 
     * 
     * 
     */
    const navigate = useNavigate();

    // I am creating my own submitForm functionality after adding field values to the form.
    const submitForm = (e) => {
        /**
         * Used to prevent the default action of the form submission.
         * Normally, once a form is submitted, the webpage reloads.
         * The e.preventDefault() method prevents this behavior and lets us handle form submission using JS instead.
         * 
         * It also allows me to implement custom logic for submission, such as sending the form data to my server via an API call without reloading the page. 
         */
        e.preventDefault();

        /* I'm creating an object that will contain all the added values from the field that will submit the data to the server/API*/
        const newJob = {
            title, 
            type,
            location,
            description,
            salary,
            company:{
                name: companyName,
                description: companyDescription,
                contactEmail: companyContactEmail,
                contactPhone: companyContactPhone
            },
        };

        /**
         * This prop function has been passed from the App.jsx file to handle the submission of a new Job entry.
         * The prop contains the addJob() function which contains the POST request that sends the newJob object to our server. 
         * 
        */
        addJobSubmit(newJob);

        // Adding toastify notification just before redirecting
        toast.success("Job post added successfully");
        
        // Once the newJob has been submitted, the useNavigate() -> navigate variable redirects me to the JobPage using the '/jobs' link.
        return navigate('/jobs')
    }


  return (
    <>
    
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div
          className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
        >
            {/* I have created my own submitForm() function that handles the submission of the Form that reads the onSubmit() eventHandler.*/}
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">Add Job</h2>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Job Type</label
              >
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                

                /**
                 * These two variables ccreate a Controlled Component.
                 * A Controlled Component are those where form data is handled by the React component's state. 
                 * They also ensure state synchronization by ensuring the <select> element and the state variable(job.type) are always synced.
                 * Also allows for easy validation and additional logic to be added on the onChange() handler if needed. 
                 */

                /**
                 * This line sets the current value of the <select> element to the value of the 'job.type' property from our job object.
                 * It ensures the <select> element reflects the current state of the type property. */ 
                value={type}
                
                /**
                 * This line sets up an event handler for the onChange() event of the <select> element. 
                 * When a user selects a different job type, the event object (e) is triggered, which calls the setType(e.target.value).
                 * It then updates the state variable with the new value.
                 * The 'target.value' is whatever is selected and targeted in the <select> field. 
                 */
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Remote">Remote</option>
                <option value="Internship">Internship</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2"
                >Job Listing Name</label
              >
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="eg. Junior Front-end Engineer"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
                >Description</label
              >
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="Add any job duties, expectations, requirements, etc"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
                >Salary</label
              >
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                <option value="Under $50K">Under $50K</option>
                <option value="$50K - 60K">$50K - $60K</option>
                <option value="$60K - 70K">$60K - $70K</option>
                <option value="$70K - 80K">$70K - $80K</option>
                <option value="$80K - 90K">$80K - $90K</option>
                <option value="$90K - 100K">$90K - $100K</option>
                <option value="$100K - 125K">$100K - $125K</option>
                <option value="$125K - 150K">$125K - $150K</option>
                <option value="$150K - 175K">$150K - $175K</option>
                <option value="$175K - 200K">$175K - $200K</option>
                <option value="Over $200K">Over $200K</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700 font-bold mb-2'>
                Location
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='Company Location'
                required  
                value={location}
                onChange={(e) => setLocation(e.target.value)}         
              />
            </div>

            <h3 className="text-2xl mb-5">Company Info</h3>

            <div className="mb-4">
              <label htmlFor="company" className="block text-gray-700 font-bold mb-2"
                >Company Name</label
              >
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
                >Company Description</label
              >
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="What does your company do?"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
                >Contact Email</label
              >
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={companyContactEmail}
                onChange={(e) => setCompanyContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
                >Contact Phone</label
              >
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={companyContactPhone}
                onChange={(e) => setCompanyContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    
    
    
    </>
  )
}

export default AddJobPage