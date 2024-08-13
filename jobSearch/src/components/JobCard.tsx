import React from 'react'
import { Link } from 'react-router-dom'
const JobCard = ({job}:Data) => {
  return (
    <div
    className="border rounded-lg border-sky-500 p-3 h-64 w-[350px]"
    
  >
    <h1 className="text-2xl font-bold">{job.job_title}</h1>
    <h3>{job.employer_name}</h3>

    <h3>
      {job.job_employment_type} in{" "}
      <span>
        {job.job_city} {job.job_state}, {job.job_country}
      </span>
    </h3>

    <h3>{job.job_is_remote ? "Remote" : "In Office"}</h3>
    <div className="flex gap-3 items-center">
      <Link to={`/jobs/${job.job_id}`}>
        <h5 className="border rounded-md bg-gray-400 p-2 ">
          View Details
        </h5>{" "}
      </Link>
      <a href={job.job_apply_link}>
        {" "}
        <h5 className="border rounded-md bg-gray-400 p-2 ">
          Apply
        </h5>{" "}
      </a>
    </div>
  </div>
  )
}

export default JobCard