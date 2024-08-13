import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="h-12 w-full flex justify-between items-center bg-green-600 ">
      <div className="flex w-32 ml-4 font-bold text-lg">Logo</div>
      <div className="flex gap-5 w-64 ">
        <Link to={"/"}>
          <h5 className="text-md font-semibold">Home</h5>
        </Link>
        <Link to={"/jobs"}>
          <h5 className="text-md font-semibold">Jobs</h5>
        </Link>
        <Link to={"/salary"}>
          <h5 className="text-md font-semibold">Estimate Salery</h5>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
