import React, { useContext, useEffect } from "react";
import { createContext } from "react";
import useFetchApi from "../hooks/fetchApis";

export type Data = {
  job_id: string;
  employer_name: string;
  job_employment_type: string;
  job_title: string;
  job_is_remote: false;
  job_apply_link: string;
  job_description: string;
  job_city: string;
  job_state: string;
  job_country: string;
};

export type JobContextType = {
  jobs: Data[];
  loading: boolean;
  error: boolean;
  fetchData: (endPoint: string, query: object) => void;
};

const JobContext = createContext<JobContextType | undefined>(undefined);

interface Child {
  children: React.ReactNode;
}

export function JobContextProvider({ children }: Child) {
  const { jobs, loading, error, fetchData } = useFetchApi(dep);

  useEffect(() => {
    fetchData("search", { query: "node js developer" });
  }, dep ? dep :[]);

  return (
    <JobContext.Provider value={{ jobs, loading, error, fetchData }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJob() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJob must be used within a JobContextProvider");
  }
  return context;
}
