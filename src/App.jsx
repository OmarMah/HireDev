import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobPage from './pages/AddJobPage'
import NotFoundPage from './pages/NotFoundPage'



const App = () => {

  const addJob = async (job) => {
    await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(job)
    })
    return;
  }

  const deleteJob = async (id) => {
    await fetch(`/api/jobs/${id}`, {
      method: 'DELETE'
    })
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob}/>} />
        <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App