const employeeCtrl = {};

employeeCtrl.createEmployee = (req, res) =>{
    res.send("Crear Empleado");
}

employeeCtrl.getEmployees = (req, res) =>{
    res.send("Obtener Empleados");
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