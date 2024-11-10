// EmployeeList.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    api.get('/employees').then((res) => setEmployees(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      await api.delete(`/employees/${id}`);
      setEmployees(employees.filter((emp) => emp._id !== id));
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <Link to="/employees/new" className="btn btn-primary">Create Employee</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Designation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.mobile}</td>
              <td>{emp.designation}</td>
              <td>
                <Link to={`/employees/edit/${emp._id}`} className="btn btn-warning">Edit</Link>
                <button onClick={() => handleDelete(emp._id)} className="btn btn-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
