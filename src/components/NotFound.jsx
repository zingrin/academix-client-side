import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200 text-center px-4">
      <h1 className="text-2xl font-extrabold text-error mb-4">(.)</h1>
      <h2 className="text-3xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
