import React from "react";
import { useJobs } from "../context/JobContext"; // Assuming you have the context setup
interface SearchProps {
  handleSubmit: (e: React.FormEvent) => void;
}
const Search: React.FC<SearchProps> = ({ handelSubmit }) => {
  const { searchQuery, location, handleLocationChange, handleSearchChange } =
    useJobs();

  return (
    <form className="max-w-md mx-auto" onSubmit={handelSubmit}>
      <div className="flex gap-4 items-center">
        <div className="relative flex-1">
          <input
            type="search"
            id="search-query"
            value={searchQuery}
            onChange={handleSearchChange}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for jobs..."
            required
          />
        </div>

        <div className="relative flex-1">
          <input
            type="search"
            id="location"
            value={location}
            onChange={handleLocationChange}
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Location..."
            required
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
