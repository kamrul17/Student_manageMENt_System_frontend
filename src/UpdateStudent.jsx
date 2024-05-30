import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = { firstName: "", lastName: "", email: "", department: "" };
  const [inputData, setInputData] = useState(data);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, [id]);

  const fetchStudents = () => {
    axios
      .get(`http://localhost:8080/student/${id}`)
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  };

  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const updateSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:8080/student/${id}`, inputData)
      .then((res) => setInputData(res.data))
      .catch((err) => console.log(err));
    navigate("/StudentView");
  };
  return (
    <div className="d-flex justify-content-center ">
      <form onSubmit={updateSubmit} className="w-50 border p-5">
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            firstName
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="firstName"
            required
            value={inputData.firstName}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            lastName
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            id="lastName"
            required
            onChange={handleInput}
            value={inputData.lastName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            required
            onChange={handleInput}
            value={inputData.email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            name="department"
            id="department"
            required
            onChange={handleInput}
            value={inputData.department}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default UpdateStudent;
