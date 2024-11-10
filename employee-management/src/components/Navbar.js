import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link to="/" className="navbar-brand">Employee Management</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link to="/employees" className="nav-link">Employee List</Link>
        </li>
        <li className="nav-item">
          <Link to="/create" className="nav-link">Create Employee</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
