import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ViewStudent() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/student/${id}`)
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!student) {
    return <p>Loading...</p>;
  }

  return (
    <section>
      <h2>Student Details</h2>
      <table className="table  table-bordered w-50 shadow">
        <tbody>
          <tr>
            <th scope="row">Id</th>
            <td>{student.id}</td>
          </tr>
          <tr>
            <th scope="row">First Name</th>
            <td>{student.firstName}</td>
          </tr>
          <tr>
            <th scope="row">Last Name</th>
            <td>{student.lastName}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>{student.email}</td>
          </tr>
          <tr>
            <th scope="row">Department</th>
            <td>{student.department}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/" className="btn btn-dark mt-3">
        Back to List
      </Link>
    </section>
  );
}

export default ViewStudent;
