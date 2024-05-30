import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container bgColor">
      <div className="row d-flex justify-content-center ">
        <div className="col-md-8 text-center p-5  ">
          <h3 className="my-2">Welcome to Student Management System</h3>
          <p className="my-5">
            This is a simple Student Management System where you can manage
            student records.
          </p>
          <Link to="/StudentView" className="btn btn-primary">
            View Students
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
