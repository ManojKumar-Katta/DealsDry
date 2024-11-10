import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import { toast } from 'react-toastify';

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: [],
    image: null,
  });

  const navigate = useNavigate();
  const { id } = useParams(); // For edit mode

  useEffect(() => {
    if (id) {
      api.get(`/employees/${id}`).then((res) => setEmployee(res.data));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setEmployee((prev) => ({
        ...prev,
        course: checked ? [...prev.course, value] : prev.course.filter((c) => c !== value),
      }));
    } else if (name === 'image') {
      setEmployee((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setEmployee((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!employee.name || !employee.email || !employee.mobile) {
      toast.error("Please fill all required fields.");
      return;
    }
    if (!validateEmail(employee.email)) {
      toast.error("Please enter a valid email.");
      return;
    }

    const formData = new FormData();
    for (const key in employee) {
      formData.append(key, employee[key]);
    }

    try {
      if (id) {
        await api.put(`/employees/${id}`, formData);
        toast.success("Employee updated successfully!");
      } else {
        await api.post('/employees', formData);
        toast.success("Employee added successfully!");
      }
      navigate('/employees');
    } catch (error) {
      toast.error("Failed to submit the form.");
    }
  };

  return (
    <div className="container">
      <h2>{id ? "Edit Employee" : "Create Employee"}</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="name" className="form-control" value={employee.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" className="form-control" value={employee.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Mobile</label>
          <input type="text" name="mobile" className="form-control" value={employee.mobile} onChange={handleChange} required pattern="^\d{10}$" title="Enter a 10-digit mobile number" />
        </div>
        <div className="form-group">
          <label>Designation</label>
          <select name="designation" className="form-control" value={employee.designation} onChange={handleChange} required>
            <option value="">Select</option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className="form-group">
          <label>Gender</label>
          <div>
            <label>
              <input type="radio" name="gender" value="Male" checked={employee.gender === "Male"} onChange={handleChange} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" checked={employee.gender === "Female"} onChange={handleChange} /> Female
            </label>
          </div>
        </div>
        <div className="form-group">
          <label>Course</label>
          <div>
            <label><input type="checkbox" name="course" value="MCA" checked={employee.course.includes("MCA")} onChange={handleChange} /> MCA</label>
            <label><input type="checkbox" name="course" value="BCA" checked={employee.course.includes("BCA")} onChange={handleChange} /> BCA</label>
            <label><input type="checkbox" name="course" value="BSC" checked={employee.course.includes("BSC")} onChange={handleChange} /> BSC</label>
          </div>
        </div>
        <div className="form-group">
          <label>Image Upload (jpg/png)</label>
          <input type="file" name="image" accept="image/jpeg, image/png" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">{id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
