import React from 'react'
import { useJob } from '../context/JobContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { jobs, loading, error, fetchData } = useJob();

  return (
    <div>
      <h1>Welcome to our JOb listing website </h1>
      <Link to={'/jobs'}>Go To Jobs</Link>
    </div>
  )
}

export default Home