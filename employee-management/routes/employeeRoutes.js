// server/routes/employeeRoutes.js
const express = require('express');
const authenticateToken = require('../middlewares/authMiddleware');
const { createEmployee, updateEmployee, deleteEmployee, getEmployees } = require('../../controllers/employeeController');
const router = express.Router();

router.post('/employees', authenticateToken, createEmployee);
router.get('/employees', authenticateToken, getEmployees);
router.put('/employees/:id', authenticateToken, updateEmployee);
router.delete('/employees/:id', authenticateToken, deleteEmployee);

module.exports = router;
