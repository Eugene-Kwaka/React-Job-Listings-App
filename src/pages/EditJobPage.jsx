import React from 'react'

import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';


// I pass in the updateJobSubmit function prop from the App parent component
const EditJobPage = ({ updateJobSubmit }) => {

    // I'm putting this hook above useState variables because I want to load the current/default states first before I make any changes.
    const job = useLoaderData();

    // The default useState variable values are the values of the current job properties.
    const [title, setTitle] = useState(job.title);
    const [type, setType] = useState(job.type);
    const [description, setDescription] = useState(job.description);
    const [location, setLocation] = useState(job.location);
    const [salary, setSalary] = useState(job.salary);
    const [companyName, setCompanyName] = useState(job.company.name);
    const [companyDescription, setCompanyDescription] = useState(job.company.description);
    const [companyContactEmail, setCompanyContactEmail] = useState(job.company.contactEmail);
    const [companyContactPhone, setCompanyContactPhone] = useState(job.company.contactPhone);


    const {id} = useParams();

    const navigate = useNavigate();

    const submitForm = (e) =>{

        e.preventDefault();

        const updatedJob = {
            // I'm passing the id here because I need it to make the PUT request.
            id,
            title, 
            type,
            location,
            description,
            salary,
            company:{
                name: companyName,
                description: companyDescription,
                contactEmail: companyContactEmail,
                contactPhone: companyContactPhone,
            },
        };

        updateJobSubmit(updatedJob);

        toast.success("Job post updated successfully")

        return navigate(`/jobs/${id}`);


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
                        <h2 className="text-3xl text-center font-semibold mb-6">Update Job Details</h2>

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
                            Edit Job
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

        </>
    );
}

export default EditJobPage