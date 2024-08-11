import React from 'react'
import Navbar from './componenets/Navbar'
import Hero from './componenets/Hero'
import HomeCards from './componenets/HomeCards'
import JobListings from './componenets/JobListings'
import ViewAllJobs from './componenets/ViewAllJobs'
const App = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <HomeCards />

      <JobListings />
    
      <ViewAllJobs />    

    </>
  )
}

export default App