import React, { useContext, useEffect } from "react";
import { createContext } from "react";
import axios from "axios";

const JobContext = createContext();

interface Child {
  children: React.ReactNode;
}

export function JobContextProvider({ children }: Child) {
 

  useEffect(()=>{
    fetchData("search", {query: "javascript"});
  })

  return <JobContext.Provider value={{}}>{children}</JobContext.Provider>;
}

export function useJob() {
  const context = useContext(JobContext);
  if (!context) {
    throw new Error("useJob must be used within a JobContextProvider");
  }
  return context;
}
