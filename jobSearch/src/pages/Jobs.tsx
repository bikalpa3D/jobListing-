import useFetchApi from "../hooks/fetchApis";
import { Data } from "../types/Jobs.types";
import Search from "../components/Search";
import JobCard from "../components/JobCard";

const Jobs = () => {
  const { jobs, loading, error } = useFetchApi("search", { query: "Node js developer" },[]);

  return (
    <div>
      <h1>Jobs</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}

      <Search />

      <div className="container mx-auto flex gap-4 flex-wrap my-5">
        {jobs ? (
          jobs?.map((job: Data) => <JobCard key={job.job_id} job={job} />)
        ) : (
          <h1>Search for Jobs to get Started</h1>
        )}
      </div>
    </div>
  );
};

export default Jobs;
