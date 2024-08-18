import React, { useState, useEffect } from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'


const JobListings = ({ isHome = false }) => {
    let [jobs,setJobs] = useState([]);
    const [loading, setLoading] = useState(true);

    jobs = isHome ? jobs.slice(0, 3) : jobs;

    useEffect(() => {
        const fetchJos = async () => {

          try {
            const res = await fetch('http://localhost:8000/jobs');
            const data = await res.json();
            setJobs(data);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }

        }

        fetchJos();
    }, []);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Featured Jobs' : 'All Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Job Listing 1 --> */}
          {jobs.map((job) => (
            <JobListing key={job.id} job={job}/>
            ))
          }
          
        </div>
      </div>
    </section>

  )
}

export default JobListings