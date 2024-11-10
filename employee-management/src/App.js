import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import Dashboard from 'C:\Users\Manoj\OneDrive\Desktop\project\employee-management\src\components\Dashboard.js';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/create" element={<EmployeeForm />} />
      <Route path="/edit/:id" element={<EmployeeForm />} />
    </Routes>
  </Router>
);

export default App;
