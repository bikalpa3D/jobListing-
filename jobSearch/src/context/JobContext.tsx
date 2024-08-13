import { ChildProps } from "../types/Jobs.types";
import { useState, useContext, createContext } from "react";

export type JobContextType = {
  searchQuery: string;
  location: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleLocationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
};

const JobContext = createContext<JobContextType | undefined>(undefined);

export function JobContextProvider({ children }: ChildProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [location, setLocation] = useState<string>("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger your search logic here
  };

  return (
    <JobContext.Provider
      value={{
        searchQuery,
        location,
        handleLocationChange,
        handleSearchChange,
        handleSubmit,
      }}
    >
      {children}
    </JobContext.Provider>
  );
}

export function useJobs() {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error("useJobs must be used within a JobContextProvider");
  }
  return context;
}
