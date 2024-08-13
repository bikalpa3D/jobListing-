import React from "react";
import { useParams } from "react-router-dom";
import useFetchApi from "../hooks/fetchApis";

const JobDetails = () => {
  const { jId } = useParams();

  const { jobs, error, loading } = useFetchApi(
    "job-details",
    {
      // job_id: jId,
      job_id: "7oKm_SkxjLxpFtVuAAAAAA==",
      extended_publisher_details: "false",
    },
    [jId]
  );

  console.log(jobs);

  return (
    <div>
      <h1>Job Details</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {jobs &&
        jobs.map((job) => (
          <div key={job.job_id}>
            <h1>{job.job_title}</h1>
            <h3>{job.employer_name}</h3>
            <h3>
              {job.job_employment_type} in {job.job_city} {job.job_state},{" "}
              {job.job_country}
            </h3>
            <p>{job.job_description}</p>
            <a href={job.job_apply_link}>Apply</a>
          </div>
        ))}
    </div>
  );
};

export default JobDetails;
