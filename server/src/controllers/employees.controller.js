const Employee = require('../models/employee');
const employeeCtrl = {};

employeeCtrl.createEmployee = async (req, res) =>{
    const newEmployee = new Employee(req.body);
    await newEmployee.save();
    res.json(newEmployee);
}

employeeCtrl.getEmployees = async (req, res) =>{
    const employees = await Employee.find();
    res.json(employees);
}

employeeCtrl.getEmployee = (req, res) =>{
    res.send("Obtener Empleado");
}

employeeCtrl.editEmployee = (req, res) =>{
    res.send("Editar Empleado");
}

employeeCtrl.deleteEmployee = (req, res) =>{
    res.send("Eliminar Empleado");
}

module.exports = employeeCtrl;