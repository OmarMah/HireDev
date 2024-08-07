import React from 'react'
import Navbar from './componenets/Navbar'
import Hero from './componenets/Hero'
import HomeCards from './componenets/HomeCards'
import JobListings from './componenets/JobListings'

const App = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <HomeCards />

      <JobListings />
    
    
    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
    </>
  )
}

export default App