import React from "react";
import { Data } from "../context/JobContext";
import { useJob } from "../context/JobContext";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import JobCard from "../components/JobCard";

const Jobs = () => {
  const { jobs, loading, error, fetchData } = useJob();
  return (
    <div>
      <h1>Jobs</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}

      <Search />

      <div className="container mx-auto flex gap-4 flex-wrap my-5">
        {jobs.map((job: Data) => (
          <JobCard key={job.job_id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Jobs;
