import React from "react";
import { useParams } from "react-router-dom";
import { useJob } from "../context/JobContext";

const JobDetails = () => {
  const { jId } = useParams();
  const { fetchData } = useJob([jId]);

  fetchData("/job-details", {
    job_id: jId,
  });

  return <div>JobDetails</div>;
};

export default JobDetails;
