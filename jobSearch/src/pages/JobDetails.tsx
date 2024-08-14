import { useParams } from "react-router-dom";
import useFetchApi from "../hooks/fetchApis";

const JobDetails = () => {
  const { jId } = useParams();

  const { jobs, error, loading } = useFetchApi(
    "job-details",
    {
      job_id: jId,
      extended_publisher_details: "false",
    },
    [jId]
  );

  console.log(jobs);

  return (
    <div className="container mx-auto">
      <h1>Job Details</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      <div className="container mx-auto">
        {jobs &&
          jobs?.map((job) => (
            <div key={job.job_id}>
              <h1 className="text-2xl font-bold underline md:underline-offset-4 mb-4">
                {job.job_title} 
              </h1>
              <h3 className="text-lg font-semibold mb-4">
                {job.employer_name}
              </h3>
              <h3 className="text-lg font-semibold mb-2">
                {job.job_employment_type} in {job.job_city} {job.job_state},{" "}
                {job.job_country}
              </h3>
              <hr />
              <div>
                {job.job_description && (
                  <h3 className="text-lg font-semibold my-2 ">Job Details</h3>
                )}
                <p className="text-justify text-lg font-normal">
                  {job.job_description}
                </p>

                {job.job_highlights?.Qualifications && (
                  <h3 className="text-lg font-semibold my-2  ">
                    Qualifications
                  </h3>
                )}
                <ul className="list-disc pl-5 text-lg">
                  {job.job_highlights?.Qualifications?.map((qualification) => (
                    <li key={qualification}>{qualification}</li>
                  ))}
                </ul>
                {job.job_highlights?.Responsibilities && (
                  <h3 className="text-lg font-semibold my-2 ">
                    Responsibility
                  </h3>
                )}
                <ul className="list-disc pl-5">
                  {job.job_highlights?.Responsibilities?.map(
                    (responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    )
                  )}
                </ul>
                {job.job_highlights?.Benefits && (
                  <h3 className="text-lg font-semibold my-2 ">Benefits</h3>
                )}
                <ul className="list-disc pl-5">
                  {job.job_highlights?.Benefits?.map((benefit) => (
                    <li key={benefit}>{benefit}</li>
                  ))}
                </ul>
              </div>
              <div className="w-20 h-10 px-2 py-1 rounded-lg text-lg bg-green-400 text-slate-100 flex justify-center my-7">
                <a href={job.job_apply_link}>Apply</a>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default JobDetails;
